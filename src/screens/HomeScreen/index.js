import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { Amplify, Auth } from 'aws-amplify'

const Index = () => {
  const signOut = () =>{
    Auth.signOut().then(msg=>{
      console.log('Signed out')
    }).catch(error=>{
      console.log('Sign out error: '+error.toString())
    });
  }

  return (
    <View style={styles.body}>
      <Text style={styles.signOut} onPress={signOut}>Sign Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOut:{
    width:'100%',
    textAlign: 'center',
    color: 'red',
    marginTop: 'auto',
    marginVertical: 20,
    fontSize:20
  }
});

export default Index