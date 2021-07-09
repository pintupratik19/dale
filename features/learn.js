import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

import axios from 'axios'
const logo = require('../images/Dale.png')

export default function Learn({route, navigation}) {
  const input = route.params
  let allData = require('../data/alldata')
  let date = "July042021";
  let details = input.data

  console.log(details)
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/Dale.png')} />
      <Text style={styles.header}>{details.title}</Text>
      <Text style={styles.description}>{details.title}</Text>
      <Text style={styles.description}>{details.description}</Text>
      

      
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
  header :{
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold"
  },
  description : {
    fontFamily: "Cochin",
    fontSize: 10,
    color:'white'

  },
  data:{
    fontFamily: "Cochin",
    fontSize: 8
  },
  logo:{
    width:50,
    height:50
  }
});

async function getTopicData(topic){
  await axios.get(`http://localhost:3000/getData?topic=${topic}`)
  .then(response=>{
    console.log(response+"*****************")
    return response.data
  })
}
