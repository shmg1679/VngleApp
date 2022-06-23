import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type='PRIMARY', bgColor, fgColor,bdColor}) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container, 
      styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor} : {},
      bdColor ? {borderColor: bdColor} : {},
      ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`], 
        fgColor ? {color: fgColor} : {},
      ]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        marginVertical:5,

        alignItems: 'center',
        borderRadius: 8,
    },
    container_PRIMARY:{
        backgroundColor: '#01b7e7',
    },
    container_TERTIARY:{
        backgroundColor: '#f7f7f7',
        borderWidth: 3, 
        borderColor: '#bbbdbf',
    },
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_TERTIARY:{
        color: 'black'
    }
})

export default CustomButton