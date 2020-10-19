import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from "react-native-phone-number-input";
import { signInRequest } from '~/store/modules/auth/actions';
import api from '~/services/api';

import {
  Container,
  ContainerTitle,
  Form,
  FormInput,
  SubmitButton,
  Title,
  TitleInto,
  SubTitle,
  TitleAccount,
} from './styles';


export default function PhoneNumberScreen({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


  const loading = useSelector(state => state.auth.loading);

  async function handleSendSms() {

    try {
      
      setIsLoading(true)
      const response =  await api.post('sendSms', {
        telephone_number: formattedValue.replace(" ", "").trim(),
      }).then(response => {
        setIsLoading(false)
      });
        //console.log(response);
      navigation.navigate('SmsVerificationScreen', {
        formattedValue,
      })
    }catch (error) {
      setIsLoading(false)
      //console.log(error);
      Snackbar.show({
        text: 'Make sure that the phone number was entered correctly.',
        duration: Snackbar.LENGTH_LONG,
      });
      } 

  }

  return (

    <>
<ContainerTitle>
    <Title>Enter Your  </Title>
<Title>phone number </Title>

<SubTitle>We need your phone number so we can connect you with other users. Don't worry, only users chosen by you will have access to it. </SubTitle>
</ContainerTitle>
      <Container>

        <Form>
        <TitleInto> Phone Number </TitleInto>

        <PhoneInput
            defaultValue={value}
            defaultCode="US"
            containerStyle={{ marginBottom: '10%' , paddingLeft: 15 ,paddingRight: 15 ,width: '100%', height: 50, borderRadius: 10,backgroundColor: '#f4f4f4'  }}
            textContainerStyle={{ paddingLeft: 15 ,paddingRight: 15 ,width: '100%', height: 50, borderRadius: 10,backgroundColor: '#f4f4f4'  }}
            textInputStyle= {{ height : 60}}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {

              setFormattedValue(text);

            }}
            autoFocus
          />


<SubmitButton loading={isLoading} onPress={() => handleSendSms()}>
            Next
          </SubmitButton>


        </Form>


          <TitleAccount> Already have an account?</TitleAccount>

          <SubmitButton loading={isLoading} onPress={() => navigation.navigate('SignIn')}>
           Sign in
          </SubmitButton>
      </Container>
      </>

  );
}
