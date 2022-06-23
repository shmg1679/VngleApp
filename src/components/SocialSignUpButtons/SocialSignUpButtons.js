import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignUpButtons = () => {
    const onSignInFacebook = () =>{
        console.warn('Facebook');
    }

    const onSignInGoogle = () =>{
        console.warn('Google');
    }

    const onSignInApple = () =>{
        console.warn('Apple');
    }
    return (
        <>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#ffffff" fgColor="#383636" type='TERTIARY' bdColor="#69a2ff"/>
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#ffffff" fgColor="#383636" type='TERTIARY' bdColor="#7de35b"/>
            <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#ffffff" fgColor="#212020" type='TERTIARY' bdColor="#f26666"/>
        </>
    )
}

export default SocialSignUpButtons