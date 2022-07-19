import React, { Component } from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 1
 })

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ]);
    if (granted['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' && granted['android.permission.ACCESS_FINE_LOCATION'] === 'granted' && granted['android.permission.ACCESS_COARSE_LOCATION'] === 'granted') {
      console.log("Permissions granted");
      // let location = await RNLocation.getLatestLocation({timeout: 100})
      // console.log(location, location.longitude, location.latitude, 
      // location.timestamp)
    } else {
      console.log("Permissions denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const permissionHandle = async () => {

  //console.log('here')


  // let permission = await RNLocation.checkPermission({
  //   ios: 'whenInUse', // or 'always'
  //   android: {
  //     detail: 'coarse' // or 'fine'
  //   }
  // });

  //console.log('here2')
  console.log(permission)

  let location;

  let permission = await RNLocation.requestPermission({
    ios: "whenInUse",
    android: {
      detail: "coarse",
      rationale: {
        title: "We need to access your location",
        message: "We use your location to show where you are on the map",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }
    }
  })
  
  console.log(permission)
  // location = await RNLocation.getLatestLocation({timeout: 100})
  
  // console.log(location, location.longitude, location.latitude, 
  // location.timestamp)

}

// class Permissions extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.item}>Try permissions</Text>
//         <Button title="request permissions" onPress={permissionHandle} />
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// });

// export default Permissions;

export {permissionHandle, requestCameraPermission};