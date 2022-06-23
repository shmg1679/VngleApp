import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width:'100%',

        borderColor: '#ffac31',
        borderWidth: 2,
        borderRadius: 8,

        paddingHorizontal:10,
        marginVertical:8,
    },
    input:{

    },
})

export default CustomInput