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
          <Box marginBottom='s12'>
            <Button
              loading
              title='Entrar'
            />
          </Box>
          <Button
            marginBottom='s12'
            loading={false}
            title='Primary'
          />
          <Button
            marginBottom='s12'
            disabled
            loading={false}
            title='Primary'
          />
          <Button
            marginBottom='s12'
            preset='outline'
            title='Outline'
          />
          <Button
            marginBottom='s12'
            disabled
            preset='outline'
            title='Outline'
          />
          <Button
            marginBottom='s12'
            preset='outline'
            title='Outline'
            loading
          />
          <Button
            marginBottom='s12'
            disabled
            preset='outline'
            title='Outline'
            loading
          />




        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App;