import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateProfileRequest } from '~/store/modules/user/actions';
import Snackbar from 'react-native-snackbar';
import api from '~/services/api';

import {
  Container,
  ContainerTitle,
  Form,
  FormInput,
  SubmitButton,
  Title,
  TitleInto,
  Number,
  NumberContainer,
  SubTitle,
} from './styles';


export default function UpdateForgotScreen({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const telephone_number = navigation.getParam('phonenumber');

  async function handleSubmit() {
    if (password === passwordCheck) {

      try {
        setIsLoading(true)
        const response =  await api.put('users', {
          telephone_number: telephone_number.replace(" ", "").trim(),
          email,
          password,
          confirmPassword: passwordCheck,
 
        }).then(response => {
          setIsLoading(false)
        });
          //console.log(response);
          navigation.navigate('SignIn');

      }catch (err) {
        if (err.response.data.error === 'Account not exist.') {
          Alert.alert( 'Update failed', 'Account not exist.');
        } else if (err.response.data.error === 'Validation fails') {
          Alert.alert(
            'Update failed',
            'Password must be at least 6 characters'
          );
        }else{
          Snackbar.show({
            text: 'Something went wrong.',
            duration: Snackbar.LENGTH_LONG,
          });
        }

        setIsLoading(false)
        //console.log(error);

        } 

      // dispatch(
      //   updateProfileRequest({
      //     email,
      //     password,
      //     passwordCheck,
      //     telephone_number: telephone_number.replace(" ", "").trim(),
      //   })
      // );
    } else {
      Snackbar.show({
        text: 'Senhas não conferem',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }

 

  return (

    <>
<ContainerTitle>
    <Title>Change Password</Title>
    <SubTitle>The email must match the phone number provided and vice versa, so the password change will be made.</SubTitle>

</ContainerTitle>
      <Container>

         
        <Form>

        <TitleInto>Current account email</TitleInto>

        <FormInput
            icon="email"
            placeholder="E-mail"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

        <TitleInto>New Password</TitleInto>
          <FormInput
            icon="lock-outline"
            passwordField
            placeholder="New Password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordCheckRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

<TitleInto>New Password Confirmation</TitleInto>
          <FormInput
            icon="lock-outline"
            passwordField
            placeholder="New Password Confirmation"
            ref={passwordCheckRef}
            returnKeyType="send"
            value={passwordCheck}
            onChangeText={setPasswordCheck}
          />

         <TitleInto>Phone number</TitleInto>
         <NumberContainer>
         <Number>{telephone_number}</Number>
         <Icon name="check"  size={20} color="#12b847"></Icon>
         </NumberContainer>
        </Form>

          <SubmitButton loading={isLoading} onPress={() => handleSubmit()}>
           Change Password
          </SubmitButton>
      </Container>
      </>

  );
}
