import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from "react-native-phone-number-input";

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  ContainerTitle,
  Form,
  FormInput,
  SubmitButton,
  ForgotPassButton,
  Title,
  TitleInto,
  TitleAccount,
} from './styles';



export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(formattedValue, password));
  }

  return (

    <>
<ContainerTitle>
    <Title> Welcome  </Title>
<Title> to Cash Opera </Title>
</ContainerTitle>
      <Container>

        <Form>
        <TitleInto> Phone Number </TitleInto>

        {/* export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #f4f4f4;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`; */}

        <PhoneInput
            defaultValue={value}
            defaultCode="US"
            containerStyle={{ paddingLeft: 15 ,paddingRight: 15 ,width: '100%', height: 50, borderRadius: 10,backgroundColor: '#f4f4f4'  }}
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


   <TitleInto> Password  </TitleInto>
          <FormInput
            icon="lock-outline"
            passwordField
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Sign in
          </SubmitButton>





        </Form>

        <ForgotPassButton loading={loading}>
            Forgot your password?
          </ForgotPassButton>

          <TitleAccount> Don't have an account yet? </TitleAccount>

          <SubmitButton loading={loading} onPress={() => navigation.navigate('SignUpFlow')}>
            Sign up for free
          </SubmitButton>
      </Container>
      </>

  );
}
