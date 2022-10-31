import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const User = ({item}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: 'https://picsum.photos/200'}} style={styles.image}/>
        <View style={styles.right}>
        <View style={styles.textContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.status}>{item.name}</Text>
        </View>
        <View style={styles.buttons}>
            <Icon style={styles.icon} name="person-add"/>
            <Icon style={styles.icon} name="remove-circle-outline"/>
        </View>
        </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 15
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20
    },
    textContainer: {
        justifyContent: 'center'
    },
    username: {
        fontSize: 14,
        fontWeight: "700",
         
    },
    status: {
        fontSize: 12
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    icon: {
        fontSize: 22,
        borderWidth: 1,
        marginRight: 15,
        aspectRatio: 1,
        padding: 5,
        borderRadius: 16,
        
    }
})