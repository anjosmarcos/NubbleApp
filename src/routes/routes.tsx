import { IconProps } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ForgotPasswordScreen,
    LoginScreen,
    SingUpScreen,
    SuccessScreen
} from '@screens';

import React from "react";


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

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true
            }} initialRouteName="LoginSreen">
                <Stack.Screen name="LoginSreen" component={LoginScreen} />
                <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}