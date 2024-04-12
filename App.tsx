import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingMedium' italic >Fonte Normal</Text>
      <Text preset='headingMedium' italic bold style={{ color: 'red' }}>Fonte Satoshi-Light</Text>
      <Text preset='headingMedium' semiBold style={{ color: 'red' }}>Fonte Satoshi-Light</Text>


    </SafeAreaView>
  )
}

export default App;