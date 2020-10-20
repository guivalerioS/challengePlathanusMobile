import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
justify-content: center;
 flex-direction : row;
  align-items: center;
  padding: 25px;
  margin-top:5%;
  margin-bottom:7.5%;
`;

export const PinContainer = styled.View`

  flex-direction : row;


`;

export const ContainerTitle = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  height: 20px;
  margin-bottom: 3%
  margin-top: 3%
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #A4A4A4;
  margin-top:5%;
`;

export const Number = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #15162c;
  font-weight: bold;
`;

export const TitleAccount = styled.Text`
  font-size: 20px;
  color: #15162c;
  font-weight: bold;
  margin-top: 40%;
`;

export const ContainerButton = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: center;
  align-items: center;
  padding: 25px;

`;

export const TitlePin = styled.Text`
  font-size: 13px;
  color: #15162c;
  font-weight: bold;
  margin-left: 13%;
`;

export const TitleResend = styled.Text`
  font-size: 13px;
  color: #0073ff;
  font-weight: bold;
  margin-left: 13%;
`;


export const TitleInto = styled.Text`
  font-size: 13px;
  color: #15162c;
  font-weight: bold;
  padding: 30px 45px;
`;

export const Form = styled.View`
  margin-top: 70px;
  flex-direction : row;
  height: 5%;
  justify-content: space-between;

`;

export const FormInput = styled(Input)`
  width:22%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 6%;
  width: 100%;
`;
export const ForgotPassButton = styled(Button)`
  margin-top: 6%;
  width: 70%;
  background: rgba(124, 180, 150, 0.6);
`;


export const Separator = styled.View`
  height: 1px;
  background: #fff;
  margin: 10px 0 30px;
`;
