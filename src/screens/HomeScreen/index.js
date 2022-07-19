import { View, Text, Button, StyleSheet, Pressable, Alert, Image, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import axios from 'axios';
import CustomButton from '../../components/CustomButton'
import ImagePicker from 'react-native-image-crop-picker';
import Camera from '../../../assets/images/camera-icon.png'
import Upload from '../../../assets/images/upload-icon.png'
import {token} from '../../screens/SignInScreen/SignInScreen'
import RNFS from 'react-native-fs'

const Index = () => {

  let path = null;
  let pickID = null; 

  const takeVid = () =>{
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      const filePath = JSON.stringify(image)
      
      console.log('file path: '+filePath)
      const newFilePath = RNFS.ExternalCachesDirectoryPath
      RNFS.moveFile(filePath,newFilePath)
      console.log("huh: "+newFilePath)
      console.log(image);
    }).catch((err) => { console.log("openCamera catch " + err.toString()) });
  }

  const pickVid = () =>{
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video.path);
      path = video.path;
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

    console.log(path);
    console.log(token);
  
    // //const uri = path 
    // //const uri = 'file:///data/user/0/com.vngleloginpractice/cache/react-native-image-crop-picker/video-a32335db-34d3-4af1-9d69-1d750a0e0f4a7596750946545028065.mp4'; // from any library, you just need file path
    
    // const formData = new FormData();
    // formData.append('files', {
    //   name: 'test',
    //   type: 'video/mp4',
    //   uri: path,
    // });

    // formData.append("refId", picker);
    
    // formData.append("ref", "api::story.story");
    
    // formData.append("field", "media");
    
    
    
    // fetch('http://10.0.2.2:1337/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log('response', response);
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });

//****************************************************************


    axios.post('http://10.0.2.2:1337/api/stories',
    {
      "data": {
        title: title,
        description: description,
        tag: tag, 
      }
    }, 
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${token}`
      }
    }
  )
  .then((response) => {
    console.warn(response.data.data.id);
    pickID = response.data.data.id;
    const formData = new FormData();
    formData.append('files', {
      name: `${pickID}`,
      type: 'video/mp4',
      uri: path,
    });
    formData.append("refId", pickID);
    formData.append("ref", "api::story.story");
    formData.append("field", "media");
    fetch('http://10.0.2.2:1337/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  })
  .catch((error) => {
    console.warn(error)
  })


}

  return (
    <View style={styles.body}>
      
      <Pressable onPress={takeVid}>
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