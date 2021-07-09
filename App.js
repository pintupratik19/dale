import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './features/Login'
import Home from './features/home'
import Learn from './features/learn'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home"  component={Home}  />
        <Stack.Screen name="Learn" component={Learn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


