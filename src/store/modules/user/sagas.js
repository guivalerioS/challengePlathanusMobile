import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import {
  updateProfileFailure,
  updateProfileSuccess,
} from './actions';

export function* updateProfile({ payload, navigation }) {
  try {
    const { passwordCheck, password, email, telephone_number } = payload.data;
    yield call(api.put, 'users', {
      telephone_number,
      email,
      password,
      confirmPassword: passwordCheck,
    });

    Alert.alert('Success!', 'Password successfully changed');
    navigation.navigate('SignIn');

  } catch (err) {
 if (err.response.data.error === 'Account not exist.') {
      Alert.alert( 'Update failed', 'Account not exist.');
    } else if (err.response.data.error === 'Validation fails') {
      Alert.alert(
        'Update failed',
        'Password must be at least 6 characters'
      );
    }
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
