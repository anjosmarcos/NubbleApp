import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IconProps} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export type RootStackParamList = {
  LoginSreen: undefined;
  SingUpScreen: undefined;
  SuccessScreen: {
    title: string;
    message: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
  // TODO: Add the other screens here
};

export function Router() {
  const authentication = false;

  return (
    <NavigationContainer>
      {authentication ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
