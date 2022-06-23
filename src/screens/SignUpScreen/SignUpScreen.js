import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

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
                <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
                <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
                <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry={true}/>

                <CustomButton text="Register" onPress={onRegisterPressed}/>
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
        color: '#051C60',
        margin: 10,
    },
    text:{
        color: 'black',
        marginVertical:10,
    },
    link:{
        fontWeight: 'bold',
        color: '#1247b3'
    },
})

export default SignUpScreen