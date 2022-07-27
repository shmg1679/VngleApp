/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import Navigation from './src/navigation';
import Home from './src/screens/HomeScreen'

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

//AWS import section
import { Amplify, Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';

Amplify.configure(awsconfig)

const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      {/* Navigation is part of old sign in / signup pages has more flexibility for customization. 
      route: src/navigation 
      Also most screens in src/screens are part of this for the sign-in and sign-up customizable pages*/}
      {/* <Navigation/> */}

      {/* home page where all the functionality of the app is at */}
      <Home/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
  flex:1,
  backgroundColor:'#fae6a9',
 }
});

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};

const customtheme = {
  ...AmplifyTheme,
  // button: {
  //   ...AmplifyTheme.button,
  //   backgroundColor: 'blue'
  // }
}
// For looking more into theme customization
//https://github.com/aws-amplify/amplify-js/blob/main/packages/aws-amplify-react-native/src/AmplifyTheme.ts
//https://docs.amplify.aws/ui/customization/theming/q/framework/react-native/
export default withAuthenticator(App,  {signUpConfig, theme: customtheme});
