import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Calculator from './components/Calculator';
import History from './components/History';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CalculatorScreen"component={Calculator} />
        <Stack.Screen name="HistoryScreen"component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
