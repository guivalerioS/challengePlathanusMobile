import React from 'react';
import { signOut } from '~/store/modules/auth/actions';
import { useDispatch } from 'react-redux';

import {
  Container,
  Title,
  LogoutButton,
} from './styles';


export default function ExampleScreen({ navigation }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (


      <Container>

        <Title> Example Screen </Title>

        <LogoutButton onPress={handleLogout}> Logout </LogoutButton>


      </Container>
     

  );
}
