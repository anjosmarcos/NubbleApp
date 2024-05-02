import { SafeAreaView, View } from "react-native";
import { Button } from "../../../components/BUtton/Button";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function LoginScreen() {
    return (
        <SafeAreaView>
            <View style={{ padding: 24 }}>
                <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
                <Text mb='s40' preset='paragraphLarge'>
                    Digite seu e-mail e senha para entrar
                </Text>

                <TextInput
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    boxProps={{ mb: 's20' }}
                />

                <TextInput
                    label='Senha'
                    placeholder='Digite sua senha'
                    RightComponent={<Icon name='eyeOn' color='gray2' />}
                    boxProps={{ mb: 's10' }}
                />

                <Text mt='s10' color='primary' preset='paragraphSmall' >
                    Esqueci minha senha
                </Text>

                <Button title='Entrar' marginTop='s48' />
                <Button preset='outline' title='Criar uma conta' marginTop='s12' />

            </View>
        </SafeAreaView>
    )
}