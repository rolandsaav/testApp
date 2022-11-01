import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from './FeedScreen';
import Home from './Home';
import Share from './Share';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Feed" component={FeedScreen}/>
        <Tab.Screen name="Share" component={Share}/>
    </Tab.Navigator>
  )
}

export default MainScreen

const styles = StyleSheet.create({})