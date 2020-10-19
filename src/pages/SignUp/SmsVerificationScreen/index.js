import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Snackbar from 'react-native-snackbar';
import { signInRequest } from '~/store/modules/auth/actions';
import { Touchable } from '~/components/Touchable';

import { ActivityIndicator } from 'react-native';


import {
  Container,
  ContainerTitle,
  Form,
  FormInput,
  SubmitButton,
  Title,
  SubTitle,
  Number,
  ContainerButton,
  PinContainer,
  TitlePin,
  TitleResend,
} from './styles';


export default function SmsVerificationScreen({ navigation }) {
  const dispatch = useDispatch();
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fourthInput, setFourthInput] = useState("");
  const [correctVerify, setCorrectVerify] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingResend, setIsLoadingResend] = useState(false);

  
  const loading = useSelector(state => state.auth.loading);
  const phonenumber = navigation.getParam('formattedValue');

  async function handleResendSms() {

    try {
      setIsLoadingResend(true)
      const response =  await api.post('sendSms', {
        telephone_number: phonenumber.replace(" ", "").trim(),
      }).then(response => {
        setIsLoadingResend(false)
      })
        //console.log(response);

    }catch (error) {
      //console.log(error);
      setIsLoadingResend(false)
      Snackbar.show({
        text: 'Make sure that the phone number was entered correctly.',
        duration: Snackbar.LENGTH_LONG,
      });
      } 

  }


  async function handleVerifySms() {

    try {
      setIsLoading(true)
      const response =  await api.post('verifySms', {
        telephone_number: phonenumber.replace(" ", "").trim(),
        code: firstInput+secondInput+thirdInput+fourthInput,
      }).then(response => {
        setIsLoading(false)
      });
        console.log(response);
        navigation.navigate('FinishScreen', {
          phonenumber,
        })
    }catch (error) {
      setCorrectVerify(false);
      setIsLoading(false)
      Snackbar.show({
        text: 'wrong or expired code.',
        duration: Snackbar.LENGTH_LONG,
      });
      } 

  }

  return (

    <>


<ContainerTitle>
    <Title>Enter PIN code  </Title>
    <SubTitle>We've sent a PIN code to <Number>{phonenumber},</Number> to verify your phone number.</SubTitle>

</ContainerTitle>

      <Container>

        <Form>
        <FormInput 
                style={ correctVerify  ? { borderWidth: 0 } : { borderWidth: 1, borderColor: '#ff0000' }}
                maxLength={1}
                keyboardType={'numeric'}
                returnKeyType="next"
                onSubmitEditing={() => secondInputRef.current.focus()}
                value={firstInput}
                onChangeText={setFirstInput}
              />
                      <FormInput
                style={ correctVerify  ? { borderWidth: 0 } : { borderWidth: 1, borderColor: '#ff0000' }}
                maxLength={1}
                keyboardType={'numeric'}
                returnKeyType="next"
                onSubmitEditing={() => thirdInputRef.current.focus()}
                value={secondInput}
                ref={secondInputRef}
                onChangeText={setSecondInput}
              />
                      <FormInput
                style={ correctVerify  ? { borderWidth: 0 } : { borderWidth: 1, borderColor: '#ff0000'}}
                maxLength={1}
                keyboardType={'numeric'}
                returnKeyType="next"
                onSubmitEditing={() => fourthInputRef.current.focus()}
                value={thirdInput}
                ref={thirdInputRef}
                onChangeText={setThirdInput}
              />
                      <FormInput
                style={ correctVerify  ? { borderWidth: 0 } : { borderWidth: 1, borderColor: '#ff0000' }}
                maxLength={1}
                keyboardType={'numeric'}
                returnKeyType="next"
                value={fourthInput}
                ref={fourthInputRef}
                onChangeText={setFourthInput}
              />

        </Form>

      </Container>


      {correctVerify? (
                <TitlePin> PIN code</TitlePin>
        ) :  (
          <>
          <PinContainer>
          <TitlePin style={{ color: '#ff0000' }}> PIN code</TitlePin>
          <Icon name="clear"  size={20} color="#ff0000"></Icon>
          <SubmitButton   loading={isLoadingResend}  style={{ width: '25%', height:'25%', marginTop: 0 , alignSelf: 'flex-start', backgroundColor: '#0000ff'}} onPress={() => handleResendSms()}>
          Resend
          </SubmitButton>
          </PinContainer>


      </>
        )}


      <ContainerButton>
      <SubmitButton loading={isLoading} onPress={() => handleVerifySms()}>
            Next
          </SubmitButton>
          
      </ContainerButton>

      </>

  );
}
