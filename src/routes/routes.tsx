import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { IconProps } from '../components/Icon/Icon';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginSreen';
import { SingUpScreen } from '../screens/auth/SingUpScreen/SingUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';

export type RootStackParamList = {
    LoginSreen: undefined;
    SingUpScreen: undefined;
    SuccessScreen: {
        title: string;
        message: string;
        icon: Pick<IconProps, 'name' | 'color'>;
    };
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}