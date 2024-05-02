import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginSreen';
import { theme } from './src/theme/theme';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  )
}

export default App;