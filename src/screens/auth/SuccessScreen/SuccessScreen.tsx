import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Icon, Screen, Text} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackTobegin() {
    // TODO: navegar para a tela inicial
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.message}
      </Text>

      <Button
        onPress={goBackTobegin}
        title="Voltar ao início"
        marginTop="s40"
      />
    </Screen>
  );
}
