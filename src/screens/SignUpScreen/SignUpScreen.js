import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control, handleSubmit, watch}= useForm()
    const pwd = watch('password')

    const navigation = useNavigation();

    const onRegisterPressed = () =>{
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    const onTermOfUsePress = () =>{
        console.warn('Terms')
    }

    const onPrivacyPress = () =>{
        console.warn('Privacy Policy')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Register</Text>

                <CustomInput 
                    name="username" 
                    control={control} 
                    placeholder="Username" 
                    rules={{
                        required:"Username is required", 
                        minLength:{
                            value:6, 
                            message:"Username should at least be 6 characters long"
                        }, 
                        maxLength:{
                            value:16, 
                            message:"Username max length is 16 characters"
                        },
                    }}
                />

                <CustomInput 
                    name="email" 
                    control={control} 
                    placeholder="Email"
                    rules={{pattern: {value:EMAIL_REGEX, message:"Email is invalid"}}}
                />

                <CustomInput 
                    name="password" 
                    control={control} 
                    placeholder="Password" 
                    secureTextEntry
                    rules={{
                        required:"Password is required", 
                        minLength:{
                            value:8, 
                            message:"Password should at least be 8 characters long"
                        }, 
                    }}
                />

                <CustomInput 
                    name="repeat-password" 
                    control={control} 
                    placeholder="Repeat Password" 
                    secureTextEntry
                    rules={{
                        validate: value =>
                           value===pwd || 'Password do not match'
                    }}
                />

                <CustomButton 
                    text="Register" 
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermOfUsePress}>Terms of Use</Text> and{' '} 
                    <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text>
                </Text>

                <SocialSignUpButtons/>

                <CustomButton text="Have an account? Sign in!" onPress={onSignInPress} type="TERTIARY"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#409fff',
        margin: 10,
    },
    text:{
        color: 'white',
        marginVertical:10,
    },
    link:{
        fontWeight: 'bold',
        color: '#409fff'
    },
})

export default SignUpScreen