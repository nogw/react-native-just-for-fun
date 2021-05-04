import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import Main from './pages/Main';
import New from './pages/New';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="New" component={New}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}