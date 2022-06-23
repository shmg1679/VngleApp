import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () =>{
        navigation.navigate('ResetPassword')
    }

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password?</Text>
                <CustomInput placeholder="Enter Email or Username" value={username} setValue={setUsername}/>

                <CustomButton text="Send" onPress={onSendPressed}/>

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
        color: '#051C60',
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

export default ForgotPasswordScreen