import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

// Load fonts
// async function loadFonts() {
//   await Font.loadAsync({
//     'Roboto': require('path/to/Roboto.ttf'),
//     // Add other fonts as needed
//   });
// }

// Call loadFonts function somewhere in your code, such as in your App component

function consoleGogglefunction(){
  console.log("The google button got pressed!")
}

function consoleFacebookfunction(){
  console.log("The Facebook Button got pressed!")
}

const symbol = "</>"


function Login(): React.JSX.Element {
  return (
    <View style={{display: 'flex', alignItems: "center"}}>
      <Image source={require('../assets/images/home.png')} style={{ width: 250, height: 500, marginTop: 70, objectFit: "contain", borderWidth: 5}}/>
      
      <View style={{backgroundColor: "#6857E8", height: 400, width: '100%', marginTop: 350, padding: 20, position: 'absolute', borderRadius: 40 }}>
        <Text style={{color: "white", fontSize: 30, textAlign: "center", }}>{symbol}</Text>
        <Text style={{textAlign: 'center', fontSize: 30, color: "white"}}>
          CodeBox
        </Text>
        <Text style={{textAlign: "center", color: "white", marginTop: 15}}>your Ultimate Programming Learning Box</Text>
        {/* Sign in Buttons Google and Facebook  */}
        <TouchableOpacity onPress={consoleGogglefunction}>
          <View style={styles.loginButton}>
            <Image source={require('../assets/images/google.png')} style={{width: 40, height: 40}}/>
            <Text>Sign-in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={consoleFacebookfunction}>
          <View style={styles.loginButton}>
            <Image source={require('../assets/images/facebook1.png')} style={{width: 40, height: 40,}}/>
            <Text>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        {/* Sign In Buttons END - Google and Facebook  */}
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    loginButton: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      marginTop: 15,
      gap: 5,
      padding: 5
    }
})