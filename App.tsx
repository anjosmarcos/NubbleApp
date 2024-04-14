import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset='headingLarge'
            italic >
            Coffstack
          </Text>
          <Box marginBottom='s24'>
            <Button
              loading
              title='Entrar'
            />
          </Box>
          <Button
            marginTop='s4'
            backgroundColor='greenPrimary'
            loading={false}
            title='Entrar'
          />




        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App;