import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '386566430920-jkensjr5uql58fnq58ruum7aa03etuc3.apps.googleusercontent.com',
});

import auth from '@react-native-firebase/auth';

function consoleFacebookfunction(){
  console.log("The Facebook Button got pressed!")
}

const symbol = "</>"

//client id: 386566430920-jkensjr5uql58fnq58ruum7aa03etuc3.apps.googleusercontent.com

function Login(): React.JSX.Element {


  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
   const hasPlaySer = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    console.log(hasPlaySer)
   // const { idToken } = await GoogleSignin.signIn();
   // console.log("token====>",idToken)
  
    // Create a Google credential with the token
    //const googleCredential = auth.GoogleAuthProvider.credential(idToken);
   // console.log("google credetials",googleCredential)
  
    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);
  }
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
        <TouchableOpacity onPress={onGoogleButtonPress}>
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