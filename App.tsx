import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingMedium' style={{ color: 'red' }}>Fonte Normal</Text>
      <Text preset='headingMedium' style={{ fontFamily: 'Satoshi-Black', color: 'red' }}>Fonte Satoshi-Light</Text>
      <Text preset='headingMedium' style={{ fontFamily: 'Satoshi-Light', color: 'red' }}>Fonte Satoshi-Light</Text>


    </SafeAreaView>
  )
}

export default App;