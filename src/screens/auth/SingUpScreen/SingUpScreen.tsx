import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../components/BUtton/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { RootStackParamList } from "../../../routes/routes";
import { PasswordInput } from "./PasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>
type SingUpFormType = {
    username: string;
    fullName: string;
    email: string;
    password: string;
}

export function SingUpScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()
    const { control, formState, handleSubmit } = useForm<SingUpFormType>({
        defaultValues: {
            username: '',
            fullName: '',
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

            <Controller
                control={control}
                name="username"
                rules={{
                    required: 'Campo obrigatório',
                    minLength: {
                        value: 3,
                        message: 'O username precisa ter no mínimo 3 caracteres'
                    }
                }}
                render={({ field, fieldState }) => {
                    return (
                        <TextInput
                            value={field.value}
                            onChangeText={field.onChange}
                            errorMessage={fieldState.error?.message}
                            label="Seu username"
                            placeholder="@"
                            boxProps={{ mb: "s20" }}
                        />
                    )
                }}
            />


            <Controller
                control={control}
                name="fullName"
                rules={{
                    required: 'Campo obrigatorio',
                    minLength: {
                        value: 3,
                        message: 'O nome precisa ter no mínimo 3 caracteres'
                    }
                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label="Nome completo"
                        placeholder="Nome completo"
                        boxProps={{ mb: "s20" }}
                    />
                )}
            />

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'Campo obrigatório',

                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        boxProps={{ mb: "s20" }}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={({ required: 'Campo obrigatório' })}
                render={({ field, fieldState }) => (
                    <PasswordInput
                        value={field.value}
                        onChangeText={field.onChange}
                        errorMessage={fieldState.error?.message}
                        label='Senha'
                        secureTextEntry
                        placeholder='Digite sua senha'
                        boxProps={{ mb: 's48' }}
                    />
                )}
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