export function signInRequest(formattedValue, password, navigation) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { formattedValue, password },
    navigation,
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}


export function signUpRequest(name, email, password,telephone_number, navigation) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password,telephone_number },
    navigation,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
