import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { StoreState } from '../store/createStore';

const Routes: React.FC = () => {
  const { auth, signUp } = useSelector((state: StoreState) => state);

  const token = signUp.token || auth.token;

  console.log(token);

  return token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
