import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () =>{
        navigation.navigate('Home')
    }

    const onSignInPress = () =>{
        navigation.navigate('SignIn')
    }

    const onResendPress = () =>{
        console.warn('Resend');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                <CustomInput placeholder="Enter Confirmation Code" value={code} setValue={setCode}/>

                <CustomButton text="Confirm" onPress={onConfirmPressed}/>

                <CustomButton text="Resend Code" onPress={onResendPress} type="TERTIARY" bgColor="#ffffff" fgColor="#383636" bdColor="#01b7e7"/>
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

export default ConfirmEmailScreen