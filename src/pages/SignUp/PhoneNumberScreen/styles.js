import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';



export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    marginTop: 15
  },
})`
  flex: 1;
`;

export const ContainerTitle = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
  height: 20px;
  margin-bottom: 15%
`;



export const Title = styled.Text`
  font-size: 30px;
  color: #15162c;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #A4A4A4;
  margin-top:5%;
`;



export const TitleAccount = styled.Text`
  font-size: 20px;
  color: #15162c;
  font-weight: bold;
  margin-top: 30%;
`;

export const TitleInto = styled.Text`
  font-size: 13px;
  color: #15162c;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 70px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
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
