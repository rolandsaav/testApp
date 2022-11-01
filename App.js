import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import MainScreen from "./components/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { auth } from "./firebase";
import { AuthContext } from "./components/AuthContext";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
    <SafeAreaView style={styles.safeArea}>
      <AuthContext.Provider value={{user, setUser}}>
        <Stack.Navigator>
          {user ? (
          <>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
          </>
          ) : (
          <>
            {/* <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>  */}
            <Stack.Screen name="SignIn" options={{headerShown: false}}>
              {(props) => <SignIn {...props} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/> 
          </>
          )}
        </Stack.Navigator>
        </AuthContext.Provider>
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
