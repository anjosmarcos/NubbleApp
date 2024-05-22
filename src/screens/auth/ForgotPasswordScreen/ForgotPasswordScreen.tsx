import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/BUtton/Button";
import { FormTextInput } from "../../../components/FormTextInput/FormTextInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { RootStackParamList } from "../../../routes/routes";
import { forgotPasswordSchema } from "./forgotPasswordSchema";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()

    const { control, formState, handleSubmit } = useForm<forgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ''
        },
        mode: 'onChange'
    })

    function submitForm(formValues: forgotPasswordSchema) {
        // TODO: 

        console.log(formValues)

        reset({
            title: 'Enviamos as instruções para seu e-mail',
            message: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary'
            }
        })

        navigation.navigate('SuccessScreen', {
            title: 'Enviamos as instruções para seu e-mail',
            message: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary'
            }
        })

    }
    return (
        <Screen canGoBack>
            <Text mb="s16" preset="headingLarge">Esqueci minha senha</Text>
            <Text mb="s32" preset="paragraphLarge">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's40' }}
            />

            <Button
                title="Recuperar senha"
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
            />
        </Screen>
    )
}