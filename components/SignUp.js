import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPw, setConfirmPw] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => console.log(error));
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Small Step</Text>
        </View>
        <TextInput style={styles.text} placeholder="Name" placeholderTextColor={"#4a4a4a"} onChangeText={text => setName(text)}/>
        <TextInput style={styles.text} placeholder="Email" placeholderTextColor={"#4a4a4a"} onChangeText={text => setEmail(text)}/>
        <TextInput style={styles.text} placeholder="Password" placeholderTextColor={"#4a4a4a"} onChangeText={text => setPassword(text)} secureTextEntry/>
        <TextInput style={styles.text} placeholder="Confirm Password" placeholderTextColor={"#4a4a4a"} onChangeText={text => setConfirmPw(text)} secureTextEntry/>
        <Pressable onPress={handleSignUp}  style={styles.button} >
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable  style={styles.button} onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 8,
        borderColor: '#bbb',
        borderWidth: 2,
        color: 'black',
        fontWeight: "600"
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    titleText: {
        fontSize: 60,
        fontWeight: "600"
    },
    button: {
        borderColor: "#00399c",
        borderWidth: 1,
        backgroundColor: "#005eff",
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 8,
        borderColor: '#bbb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }

})