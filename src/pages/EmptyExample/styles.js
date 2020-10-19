import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-top:5%;

`;

export const Title = styled.Text`
  font-size: 30px;
  color: #15162c;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
  width:80%;
`;




