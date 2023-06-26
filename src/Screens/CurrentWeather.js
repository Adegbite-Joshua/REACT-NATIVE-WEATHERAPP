// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from '../Components/RowText';
// import style from './Style.module.css'

const CurreentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} color='black'/>
        {/* <Text>Current Weather</Text> */}
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 6</Text>
        <RowText
         messageOne={'High: 8'}
         messageTwo={'Low: 6'}
         containerStyle={styles.highLowWrapper}
         messageOneStyle={styles.highLow}
         messageTwoStyle={styles.highLow} />
        <RowText
         messageOne={'Its sunny'}
         messageTwo={'Its perfect t-shirt weather'} 
         containerStyle={styles.bodyWrapper}
         messageOneStyle={styles.description}
         messageTwoStyle={styles.message} />
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