import { Button } from "../../../components/BUtton/Button";
import { Icon } from "../../../components/Icon/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function SingUpScreen() {
    function submitForm() {
        // TODO: 
    }
    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
            <TextInput label="Seu username" placeholder="@" boxProps={{ mb: "s20" }} />
            <TextInput label="Nome completo" placeholder="Nome completo" boxProps={{ mb: "s20" }} />
            <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: "s20" }} />
            <TextInput
                label='Senha'
                placeholder='Digite sua senha'
                RightComponent={<Icon name='eyeOn' color='gray2' />}
                boxProps={{ mb: 's48' }}
            />

            <Button title="Criar uma conta" preset="primary" onPress={submitForm} />

        </Screen>
    )
}