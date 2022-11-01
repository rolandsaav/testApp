import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { auth } from '../firebase'
import { Pressable } from 'react-native'
import { AuthContext } from './AuthContext'

const Home = () => {
    const {user, setUser} = useContext(AuthContext)

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            setUser(null)
            console.log("Signed out!")
        })
        .catch(e => console.log(e))
    }

  return (
    <View style={styles.container}>
        <Text>Hello {user.email}!</Text>
        <Pressable onPress={handleSignOut}  style={styles.button} >
            <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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