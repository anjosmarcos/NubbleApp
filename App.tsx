import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/BUtton/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset='headingLarge'
            italic >
            Coffstack
          </Text>

          <Button
            title='Entrar'
          />

        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App;