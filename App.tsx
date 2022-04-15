import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import HomeScreen from './src/screens/ShoppingCartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ShoppingCartScreen />
    </SafeAreaView>
  );
};

export default App;
