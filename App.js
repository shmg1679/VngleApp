/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
  flex:1,
  backgroundColor:'#fae6a9',
 }
});

export default App;
