import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const ResetPasswordScreen = () => {
    const {control, handleSubmit}= useForm()

    const navigation = useNavigation();

    const onSubmitPressed = (data) =>{
        console.warn(data)
        navigation.navigate('Home')
    }

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput 
                    name="code" 
                    control={control} 
                    placeholder="Enter Code" 
                    rules={{
                        required:"Code is required"
                    }}
                />
                <CustomInput 
                    name="password" 
                    control={control} 
                    secureTextEntry
                    placeholder="Enter New Password" 
                    rules={{
                        required:"New password is required",
                        minLength:{
                            value:8, 
                            message:"Password should at least be 8 characters long"
                        }, 
                    }}
                />

                <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>

                <CustomButton text="Back to sign in" onPress={onSignInPress} type="TERTIARY" bgColor="#ffffff" fgColor="#383636" bdColor="transparent"/>
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
        color: 'black',
        marginVertical:10,
    },
    link:{
        color: '#1247b3'
    },
})

export default ResetPasswordScreen