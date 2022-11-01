import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import User from './User'



const FeedScreen = () => {
    let [dogImage, setDogImage] = useState("")
    let [users, setUsers] = useState([])

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => {
        setUsers(data)
    })
    
  },[])

  useEffect(() => {
    fetch("http://129.21.159.227:3000/users")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  }, [])




  return (
    <View>        
        {users && <FlatList data={users} renderItem={User} keyExtractor={(item) => item.id} style={styles.feed}/>}
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
    feed: {
      paddingTop: 10
    }
})