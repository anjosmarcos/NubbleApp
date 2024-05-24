import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from "@components";
import {
  ForgotPasswordScreen,
  LoginScreen,
  SingUpScreen,
  SuccessScreen,
} from "@screens";

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

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="LoginSreen"
      >
        <Stack.Screen name="LoginSreen" component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
