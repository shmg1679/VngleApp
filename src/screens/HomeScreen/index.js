import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';

const Index = () => {
  const takeVid = () =>{
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      console.log(image);
    }).catch(error=> {
      console.log(error)
    });
  }

  return (
    <View style={styles.body}>
      <Text>Camera</Text>
        <Button
        onPress={takeVid} title='Cam'
        />
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
  cam: {
    width:100,
    height: 100,
  }
});

export default Index