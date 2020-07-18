import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



function Counter() {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (

    <View style={styles.container}>
    <Text style={{color: "red", fontSize: 100, alignItems: 'center'}}>{count}{"\n"}</Text>
              <View style={styles.buttonContainer}>
                <Button title="+" onPress={increase}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="-" onPress={decrease}/>
              </View>
            </View>
    // <View>
    //   <Text style={{color: "red", fontSize: 100}}>{count}</Text>
    //   <Button title="+" onPress={increase} />
    //   <Button title="-" onPress={decrease} />
    // </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default Counter;
