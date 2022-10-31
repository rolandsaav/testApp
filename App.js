import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import MainScreen from "./components/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";

const Stack = createNativeStackNavigator();
const user = false;

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator>
          {user ? (
          <>
            <Stack.Screen name="Main" component={MainScreen}/>
          </>
          ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/> 
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/> 
          </>
          )}
        </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#bbb",
    height: "100%"
  }
});

export default App;
