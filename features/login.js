import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
const logo = require('../images/Dale.png')

export default function Login({navigation}) {
  const onClickLoginGuest = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.welcome}>Welcome to DaLe</Text>
      <Text style={styles.tagLine}>An App which will help you learn new topics every day</Text>
      <Button style={styles.loginButton}
        title="Login with Google"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
     <Button style={styles.loginButton}
        title="Login As Guest"
        onPress={onClickLoginGuest}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:80,
    height:80
  },
  loginButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',    
  },
  tagLine : {
    fontSize: 16,
    fontFamily : 'Cochin',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  welcome : {
    fontSize: 24,
    fontFamily : 'Cochin',
    fontWeight : 'bold'
  }
});
