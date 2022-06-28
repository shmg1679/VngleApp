import { View, Text, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import axios from 'axios';
import CustomButton from '../../components/CustomButton'
import ImagePicker from 'react-native-image-crop-picker';

const Index = () => {
  // const takeVid = () =>{
  //   ImagePicker.openCamera({
  //     mediaType: 'video',
  //   }).then(image => {
  //     console.log(image);
  //   });
  // }


  
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


//     axios.post('http://10.0.2.2:1337/api/stories', JSON.stringify({
//     "data": {
//       "title": "setTitle",
//       "description": "setDescription",
//       "tag": "setTag",
//       } 
//   }), {
//     headers: {
//         "Content-Type": "application/json",
//     }
// }).then((response) => {
//      console.log("reactNativeDemo","response get details:" + response.data);
//   })
//   .catch((error) => {
//      console.log(error.response);
//   });


  //   await axios.get(
  //     'http://10.0.2.2:1337/api/stories',
  //     {
  //       data: {
  //         title: 'setTitle',
  //         description: 'setDescription',
  //         tag: 'setTag',
  //       }
  //   }
  //   )
  //   .then((response) => {
  //     console.warn('success')
  // }).catch((error) => {
  //     console.warn(setTag)
  // })

  // fetch("http://localhost:1337/api/stories", {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     "data":{
  //       "title":"csc101",
  //       "description":"this is csc101",
  //       "tag":"T"
  //   }
  //   }) 
  // })
  //   .then(res => {
  //     res.json();
  //   })
  //   .then(data => console.log(data))  // ur data is here
  //   .catch(err => console.log("api Erorr: ", err));


//   const onSubmit = () => {
//   fetch('http://10.0.2.2:1337/api/stories', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     data: {
//       title: 'setTitle',
//       description: 'setDescription',
//       tag: 'setTag',
//       }
//   })
// });
// }

  return (
    <View style={styles.body}>
      {/* <Text>Camera</Text>
        <Button
        onPress={takeVid} title='Cam'
        /> */}
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
  cam: {
    width:100,
    height: 100,
  }
});

export default Index