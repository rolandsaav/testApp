import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from './FeedScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  )
}

export default MainScreen

const styles = StyleSheet.create({})