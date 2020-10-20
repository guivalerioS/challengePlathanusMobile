import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';


export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    marginTop: 5
  },
})`
  flex: 1;
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




