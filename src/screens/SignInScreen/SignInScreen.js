import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/VngleLogo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () =>{
        navigation.navigate('Home')
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
                <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

                <CustomButton text="Sign In" onPress={onSignInPressed}/>
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