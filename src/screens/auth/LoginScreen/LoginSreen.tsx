import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../../components/BUtton/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { RootStackParamList } from "../../../routes/routes";
import { PasswordInput } from "../SingUpScreen/PasswordInput";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginSreen'>

export function LoginScreen({ navigation }: ScreenProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorMessages, setEmailErrorMessages] = useState('');

    useEffect(() => {
        const isValidateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
        setEmailErrorMessages(isValidateEmail ? '' : 'E-mail inválido')

    }, [email])

    function navigateToSignUpScreen() {
        navigation.navigate('SingUpScreen');
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPasswordScreen')
    }

    function submitForm() {
        // Chamar a API para fazer login

        Alert.alert(`Email: ${email} ${`\n`}Senha: ${password}`)
    }

    return (
        <Screen>
            <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
            <Text mb='s40' preset='paragraphLarge'>
                Digite seu e-mail e senha para entrar
            </Text>

            <TextInput
                errorMessage={emailErrorMessages}
                value={email}
                onChangeText={setEmail}
                label='E-mail'
                placeholder='Digite seu e-mail'
                boxProps={{ mb: 's20' }}
            />

            <PasswordInput
                value={password}
                onChangeText={setPassword}
                label='Senha'
                placeholder='Digite sua senha'
                // RightComponent={<Icon name='eyeOn' color='gray2' />}
                boxProps={{ mb: 's10' }}
            />

            <Text onPress={navigateToForgotPasswordScreen} mt='s10' color='primary' preset='paragraphSmall' >
                Esqueci minha senha
            </Text>

            <Button disabled={!!emailErrorMessages || password.length < 6} onPress={submitForm} title='Entrar' marginTop='s48' />
            <Button onPress={navigateToSignUpScreen} preset='outline' title='Criar uma conta' marginTop='s12' />
        </Screen>
    )
}