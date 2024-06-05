import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SingUpScreen,
  SuccessScreen,
} from '@screens';

export type AuthStackParamList = {
  LoginSreen: undefined;
  SingUpScreen: undefined;
  SuccessScreen: {
    title: string;
    message: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="LoginSreen">
      <Stack.Screen name="LoginSreen" component={LoginScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
