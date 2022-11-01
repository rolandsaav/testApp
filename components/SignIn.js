import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './AuthContext'

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(AuthContext)

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const him = userCredentials.user;
            console.log(`Logged in as ${him.email}!`);
            setUser(him)
        })
        .catch(error => console.log(error))
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Small Step</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.text} placeholder="Email" placeholderTextColor={"#4a4a4a"} onChangeText={e => setEmail(e)}/>
            <TextInput style={styles.text} placeholder="Password" placeholderTextColor={"#4a4a4a"} onChangeText={text => {setPassword(text)}} secureTextEntry/>
            <Pressable onPress={handleSignIn}  style={styles.button} >
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable  style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
        
    </KeyboardAvoidingView>
  )
}

export default SignIn

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
    },
    inputContainer: {
        paddingHorizontal: 30
    }

})