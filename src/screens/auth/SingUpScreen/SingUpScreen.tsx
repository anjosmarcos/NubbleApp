import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/BUtton/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { RootStackParamList } from "../../../routes/routes";
import { PasswordInput } from "./PasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>

export function SingUpScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()

    function submitForm() {
        // TODO: 

        reset({
            title: 'Sua conta foi criada com sucesso!',
            message: 'Agora é só fazer login na nossa plataforma',
            icon: { name: 'CheckRound', color: 'success' }
        })

    }
    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
            <TextInput label="Seu username" placeholder="@" boxProps={{ mb: "s20" }} />
            <TextInput label="Nome completo" placeholder="Nome completo" boxProps={{ mb: "s20" }} />
            <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: "s20" }} />

            <PasswordInput
                label='Senha'
                secureTextEntry
                placeholder='Digite sua senha'
                boxProps={{ mb: 's48' }}
            />

            <Button
                title="Criar uma conta" preset="primary" onPress={submitForm}
            />

        </Screen>
    )
}