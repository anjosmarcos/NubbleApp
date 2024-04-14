import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/BUtton/Button';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset='headingLarge' italic >Coffstack</Text>

        <Button
          title='Clique aqui'
        />

      </View>
    </SafeAreaView>
  )
}

export default App;