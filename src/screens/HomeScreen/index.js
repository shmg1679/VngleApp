import { View, Text, Button, StyleSheet, Pressable, Alert, Image, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import axios from 'axios';
import CustomButton from '../../components/CustomButton'
import ImagePicker from 'react-native-image-crop-picker';
import Camera from '../../../assets/images/camera-icon.png'
import Upload from '../../../assets/images/upload-icon.png'

const Index = () => {
  const takeVid = () =>{
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      
      console.log(image);
    }).catch((err) => { console.log("openCamera catch " + err.toString()) });
  }

  const pickVid = () =>{
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
    }).catch((err) => { console.log("openPicker catch " + err.toString()) });
  }

  const takePic = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    }).catch((err) => { console.log("openPicker catch " + err.toString()) });
  }

  const {height} = useWindowDimensions();

  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const onSubmit = () => {
    axios.post('http://10.0.2.2:1337/api/stories',
    {
      "data": {
        title: title,
        description: description,
        tag: tag
      }
    }, 
    {
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
  .then((response) => {
    console.warn(response);
  })
  .catch((error) => {
    console.warn(error)
  })
}

  return (
    <View style={styles.body}>
      
      <Pressable onPress={takePic}>
        <Image
          source={Camera} style={[styles.camera, {height: height*0.15}]} resizeMode='contain'
        />
      </Pressable>
      <Pressable onPress={pickVid}>
        <Image
          source={Upload} style={[styles.upload, {height: height*0.15}]} resizeMode='contain'
         />
      </Pressable>

      <CustomInput placeholder="title" value={title} setValue={setTitle}/>
      <CustomInput placeholder="description" value={description} setValue={setDescription}/>
      <CustomInput placeholder="tag" value={tag} setValue={setTag}/>
      <CustomButton text="Submit" onPress={onSubmit}/>
        
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
  camera: {
    width:100,
    height: 100,
    backgroundColor: '#ededed',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  upload:{
    width:100,
    height: 100,
    backgroundColor: '#ededed',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default Index