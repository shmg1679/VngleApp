import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/VngleLogo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState:{errors}} = useForm();


    const onSignInPressed = (data) =>{
        console.log(data)
        // navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPress = () =>{
        navigation.navigate('SignUp')
    }

    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.Logo, {height: height*0.25}]} resizeMode='contain'/>
                <Text style={{color:"white",alignSelf:'stretch'}} >Username</Text>
                <CustomInput name="username" placeholder="Username" control={control} rules={{required:'Username is required'}}/>
                <Text style={{color:"white",alignSelf:'stretch'}} >Password</Text>
                <CustomInput name="password" placeholder="Password" secureTextEntry control={control} rules={{required:'Password is required', minLength:{value:8, message:'Password should be minimum 8 characters long'}}}/>

                <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

                <SocialSignUpButtons/>

                <CustomButton text="Don't have an account? Sign up!" onPress={onSignUpPress} type="TERTIARY"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    Logo:{
        width:'70%',
        maxWidth:300,
        maxHeight: 200,
        height:100,
    }
})

export default SignInScreen