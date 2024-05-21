import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/BUtton/Button";
import { FormPasswordInput } from "../../../components/FormPasswordInput/FormPassWordInput";
import { FormTextInput } from "../../../components/FormTextInput/FormTextInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>
type SingUpFormType = {
    username: string;
    fullname: string;
    email: string;
    password: string;
}

export function SingUpScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()
    const { control, formState, handleSubmit } = useForm<SingUpFormType>({
        defaultValues: {
            username: '',
            fullname: '',
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    function submitForm(formValues: SingUpFormType) {
        // TODO: 

        console.log(formValues)

        // reset({
        //     title: 'Sua conta foi criada com sucesso!',
        //     message: 'Agora é só fazer login na nossa plataforma',
        //     icon: { name: 'CheckRound', color: 'success' }
        // })

    }
    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <FormTextInput
                control={control}
                autoCapitalize="none"
                name="username"
                rules={{ required: 'Campo obrigatório' }}
                label="Seu username"
                placeholder="@"
                boxProps={{ mb: "s20" }}
            />

            <FormTextInput
                control={control}
                autoCapitalize="words"
                name="fullname"
                rules={{ required: 'Campo obrigatório' }}
                label="Seu nome completo"
                placeholder="Nome completo"
                boxProps={{ mb: "s20" }}
            />

            <FormTextInput
                control={control}
                autoCapitalize="none"
                name="email"
                rules={{ required: 'Campo obrigatório' }}
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: "s20" }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                rules={{
                    required: 'Campo obrigatório',
                    minLength: { value: 8, message: 'Senha deve ter no mínimo 8 caracteres' }
                }}
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{ mb: "s48" }}

            />

            <Button
                title="Criar uma conta"
                preset="primary"
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />

        </Screen>
    )
}