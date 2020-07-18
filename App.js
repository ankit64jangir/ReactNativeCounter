import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Counter from "./components/Counter";



// function Card(props) {
//   return (
//     <Text>{props.name} is a {props.status}</Text>
//   );
// }
//



export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
