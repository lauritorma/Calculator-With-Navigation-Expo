import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Calculator from './Calculator';

export default function HistoryScreen({ route, navigation }) {
    
    const {historyItems} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>History</Text>
             <FlatList
                style={styles.flatlist}
                data={historyItems}
                renderItem={({ item }) =>
            <Text style={styles.listItems}>{item.key}</Text>
            }
            /> 
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    header: {
      fontSize: 30,
      marginTop: "30%"
    },
    flatlist: {
      marginTop: 20
    },
    listItems: {
      fontSize: 18,
      textAlign: "center",
      margin: 5
    }
  });