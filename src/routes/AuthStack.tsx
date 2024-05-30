import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ForgotPasswordScreen,
  LoginScreen,
  SingUpScreen,
  SuccessScreen,
} from '@screens';

import {RootStackParamList} from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
