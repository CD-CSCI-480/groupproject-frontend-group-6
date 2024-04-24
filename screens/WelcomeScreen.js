import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import backgroundImage from '../assets/background.png'; // Adjust the file extension and path as necessary
import ButtonWithBackground from '../components/ButtonWithBackground'
import { useNavigation } from '@react-navigation/native';




export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage}resizeMode='cover'style={{ flex: 1 }}>
      <Text style={styles.headingStyle}> EZBOOKING</Text>
      <ButtonWithBackground text='Customer Sign-Up' color='#6495ed' onPress={() => navigation.navigate("CustomerSignUp")}/>
      <ButtonWithBackground text='Set Up Business' color='#6495ed' onPress={() => navigation.navigate("Set Up")}    />
      <ButtonWithBackground text='Reviews' color='#6495ed'onPress={() => navigation.navigate("Reviews")}/>
      </ImageBackground>  

      <StatusBar style="auto" />  
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headingStyle:{
    fontSize:50,
    color:'black',
    textAlign:'center',
    marginTop: 100,
  },

});
