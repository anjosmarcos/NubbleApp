import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { Button } from "../../../components/BUtton/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { RootStackParamList } from "../../../routes/routes";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginSreen'>
type LoginFormType = {
    email: string;
    password: string;

}

export function LoginScreen({ navigation }: ScreenProps) {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailErrorMessages, setEmailErrorMessages] = useState('');

    // useEffect(() => {
    //     const isValidateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    //     setEmailErrorMessages(isValidateEmail ? '' : 'E-mail inválido')

    // }, [email])

    function navigateToSignUpScreen() {
        navigation.navigate('SingUpScreen');
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPasswordScreen')
    }

    function submitForm({ email, password }: LoginFormType) {
        // Chamar a API para fazer login

        Alert.alert(`Email: ${email} ${`\n`}Senha: ${password}`)
    }

    const { control, formState, handleSubmit } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    return (
        <Screen>
            <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
            <Text mb='s40' preset='paragraphLarge'>
                Digite seu e-mail e senha para entrar
            </Text>

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'E-mail é obrigatório',
                    pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        message: 'E-mail inválido'
                    }
                }}
                render={({ field, fieldState }) =>
                (
                    <TextInput
                        autoCapitalize="none"
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='E-mail'
                        placeholder='Digite seu e-mail'
                        boxProps={{ mb: 's20' }}
                    />
                )
                }
            />

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                        value: 8,
                        message: 'Senha deve ter no mínimo 8 caracteres'
                    }

                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        secureTextEntry
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='Senha'
                        placeholder='Digite sua senha'
                        boxProps={{ mb: 's10' }}
                    />
                )}
            />


            <Text onPress={navigateToForgotPasswordScreen} mt='s10' color='primary' preset='paragraphSmall' >
                Esqueci minha senha
            </Text>

            <Button
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)} title='Entrar' marginTop='s48' />
            <Button onPress={navigateToSignUpScreen} preset='outline' title='Criar uma conta' marginTop='s12' />
        </Screen>
    )
}