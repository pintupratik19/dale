import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const logo = require('../images/Dale.png')


export default function Home({ navigation }) {
  const [learnData, setLearnData] = useState()
  const onClickTopicButton = async (value) => {
   let resp = await fetch(`http://localhost:3000/getData?topic=${value}`)
   let respJson = await resp.json()
    navigation.navigate('Learn',{ data :respJson })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.helloUser}>Hello Guest</Text>
      <Text style={styles.header}>Topics for today</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onClickTopicButton("java")}
      >
        <Text>Java</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topicButton}
        onPress={() => onClickTopicButton("design_pattern")}
      >
        <Text>Design Pattern</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topicButton}
        onPress={() => onClickTopicButton("spring_boot")}
      >
        <Text>Spring boot</Text>
      </TouchableOpacity>
     
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
  header: {
    fontSize: 20,
    fontFamily : 'Cochin',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  helloUser: {
    fontSize: 12,
    fontFamily : 'Cochin',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 10
  },
  topicButton: {
    color: 'gold'
  },
  logo:{
    width:80,
    height:80
  },
});
