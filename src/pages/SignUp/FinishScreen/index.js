import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signUpRequest } from '~/store/modules/auth/actions';
import Snackbar from 'react-native-snackbar';

import {
  Container,
  ContainerTitle,
  Form,
  FormInput,
  SubmitButton,
  Title,
  TitleInto,
  Number,
  SubTitle,
  TitleAccount,
  NumberContainer,
} from './styles';


export default function FinishScreen({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');


  const loading = useSelector(state => state.auth.loading);
  const telephone_number = navigation.getParam('phonenumber');

  function handleSubmit() {
    if (password === passwordCheck) {
      dispatch(signUpRequest(name, email, password,telephone_number, navigation));
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
    <Title>Complete Registration</Title>


    <SubmitButton >
      Complete using facebook
          </SubmitButton>

</ContainerTitle>
      <Container>

        <Form>
        <TitleInto>Full name</TitleInto>

        <FormInput
            icon="person-outline"
            placeholder="Full name"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

        <TitleInto>E-mail</TitleInto>

        <FormInput
            icon="email"
            placeholder="E-mail"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

        <TitleInto>Password</TitleInto>
          <FormInput
            icon="lock-outline"
            passwordField
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordCheckRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

<TitleInto>Password Confirmation</TitleInto>
          <FormInput
            icon="lock-outline"
            passwordField
            placeholder="Password Confirmation"
            ref={passwordCheckRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={passwordCheck}
            onChangeText={setPasswordCheck}
          />

         <TitleInto>Phone number</TitleInto>
         <NumberContainer>
         <Number>{telephone_number}</Number>
         <Icon name="check"  size={20} color="#12b847"></Icon>
         </NumberContainer>
        </Form>


        <SubTitle>By clicking Sign up you agree to our T&C</SubTitle>

          <SubmitButton loading={loading} onPress={() => handleSubmit}>
           Sign up
          </SubmitButton>
      </Container>
      </>

  );
}
