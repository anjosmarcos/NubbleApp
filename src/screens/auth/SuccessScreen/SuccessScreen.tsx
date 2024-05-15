import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "../../../components/BUtton/Button";
import { Icon } from "../../../components/Icon/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ route, navigation }: ScreenProps) {
    function goBackTobegin() {
        // TODO: navegar para a tela inicial
        navigation.goBack()
    }

    return (
        <Screen>
            <Icon {...route.params.icon} />
            <Text preset='headingLarge' mt="s24">{route.params.title}</Text>
            <Text preset='paragraphLarge' mt="s16">
                {route.params.message}
            </Text>

            <Button onPress={goBackTobegin} title="Voltar ao início" marginTop="s40" />
        </Screen>
    )
}