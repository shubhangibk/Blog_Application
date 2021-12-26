import React from 'react';
import { Navigate } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens) => {
    oktaAuth.handleLoginNavigate(tokens);
  };

  const onError = (err) => {
    console.log('error logging in', err);
  };

  if (authState.isPending) return null;

  return authState.isAuthenticated ?
    <Navigate replace to={{ pathname: '/' }}/> :
    <OktaSignInWidget
      config={config}
      onSuccess={onSuccess}
      onError={onError}/>;
};
export default Login;