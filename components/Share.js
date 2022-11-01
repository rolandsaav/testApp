import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { imagesRef } from '../firebase'
import { uploadBytes, ref } from 'firebase/storage'

const imageOptions = {
    mediaType: 'photo',
    quality: 1,

}

const Share = () => {
    const handleShare = () => {
        launchImageLibrary(imageOptions)
        .then(res => {
            if(!res.didCancel)
            {
                console.log(`Error code: ${res.errorCode}`);
                res.assets.forEach(asset => {
                    const path = asset.uri;
                    console.log(path)
                    fetch(`file://${path}`)
                    .then(res => res.blob())
                    .then(file => {
                        storageRef = ref(imagesRef, "testimage.jpg");
                        return uploadBytes(storageRef, file)
                    })
                    .then((snapshot) => {
                        console.log("Uploaded something maybe")
                    })
                    .catch((e) => console.log(e))
                })
            }
        })
    }

    return (
        <View>
        <Text>Share</Text>
        <Pressable onPress={handleShare}>
            <Text>SHARE BUTTON</Text>
        </Pressable>
        </View>
    )
}

export default Share

const styles = StyleSheet.create({})