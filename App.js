/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  // useColorScheme
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get('window');

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: Colors.lighter,
    backgroundColor: '#02042a',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor="#02042a" />
      <View style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#02042a',
  },
});

export default App;
