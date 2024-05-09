import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginSreen';
import { theme } from './src/theme/theme';


function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
        {/* <SingUpScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;