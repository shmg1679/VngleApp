import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen'

// each of these page needs:
// import { useNavigation } from '@react-navigation/native'
// and
// const navigation = useNavigation();
// in the function to navigate to each page

const Stack = createNativeStackNavigator();

const bgTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#0f0f0f'
  }
}

const Navigation = () => {
  return (
    <NavigationContainer theme={bgTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
        <Stack.Screen name='ResetPassword' component={ResetPasswordScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation