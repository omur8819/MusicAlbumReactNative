import React from 'react';
import { Image, View, Text } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

const App = () => {
  return(
  <View style={{flex: 1 }}>
    <Header headerText={'Tylor Swift Music Albums'}  />
    <Liste />
  </View>

  );
}

export default App;
