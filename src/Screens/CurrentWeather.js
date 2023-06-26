// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons'
// import style from './Style.module.css'

const CurreentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} color='black'/>
        {/* <Text>Current Weather</Text> */}
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 6</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>  
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      // flex: 1,
      backgroundColor: 'red',
      marginTop: StatusBar.currentHeight || 0
    },
    container: {
      // flex: 1,
      alignItems: 'center'
      // justifyContent: 'end'
      // justifyContent: 'center '
    },
    temp: {
      color: 'black',
      fontSize: 48
    },
    feels: {
      color: 'black',
      fontSize: 30
    },
    highLowWrapper: {
      flexDirection: 'row'
    },
    highLow: {
      color: 'black',
      fontSize: 20
    },
    bodyWrapper: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    description: {
      fontSize: 48
    },
    message: {
      fontSize: 30
    }
});
  


export default CurreentWeather