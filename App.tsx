import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <Box flexDirection='row'>
            <Icon name='eyeOff' size={50} />
            <Icon name='eyeOn' size={55} color='error' />
            <Icon name='homeFill' size={50} color='gray2' />
            <Icon name='bookmarkFill' size={50} color='primary' />
            <Icon name='profileFill' size={50} />
            <Icon name='heartFill' size={50} color='error' />
          </Box>
          <Box flexDirection='row'>
            <Icon name='bellOn' size={50} />
            <Icon name='bellOff' size={50} />
            <Icon name='chatOn' size={50} />
            <Icon name='chatOff' size={50} />
            <Icon name='comment' size={50} />
            <Icon name='arrowLeft' size={50} />
          </Box>
          <Box flexDirection='row'>
            <Icon name='arrowLight' size={50} color='error' />
            <Icon name='settings' size={50} />
            <Icon name='more' size={50} />
            <Icon name='home' size={50} />
            <Icon name='bookmark' size={50} />
            <Icon name='profile' size={50} />
          </Box>

          <Box flexDirection='row'>
            <Icon name='heart' size={50} color='error' />
            <Icon name='newPost' size={50} />
            <Icon name='camera' size={50} color='grayBlack' />
            <Icon name='search' size={50} />
            <Icon name='message' size={50} />
            <Icon name='check' size={50} color='error' />
          </Box>

          <Box flexDirection='row'>
            <Icon name='chevronRight' size={50} />
            <Icon name='flashOff' size={50} />
            <Icon name='flashOn' size={50} />
          </Box>

        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App;