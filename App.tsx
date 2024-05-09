/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useFonts } from 'expo-font';
import Login from './components/Login';
// import { Font } from 'expo';


function App(): React.JSX.Element {
//   const [fontsLoaded] = useFonts({
// 'Outfit-Black': require('../ELearningApp/assets/fonts/Outfit_Black.ttf')
//   })

// Inside your component or App.js file
// async function loadFonts() {
//   await Font.loadAsync({
//     'Outfit-Black': require('../ELearningApp/assets/fonts/Outfit_Black.ttf')
//     // Add other fonts as needed
//   });
// }
  return (
    <View>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
helloWorld : {
  fontSize: 99
}
});

export default App;
