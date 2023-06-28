// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from '../Components/RowText';
import { WeatherType } from '../Utilities/WeatherType';
// import style from './Style.module.css'


const CurreentWeather = ({weatherData}) => {
  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition = weather[0]?.main
  console.log(WeatherType[weatherCondition]);
  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: WeatherType[weatherCondition]?.backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={WeatherType[weatherCondition].icon} size={100} color='white'/>
        {/* <Text>Current Weather</Text> */}
        <Text style={styles.temp}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
         messageOne={`High: ${temp_max}°`}
         messageTwo={`Low: ${temp_min}°`}
         containerStyle={styles.highLowWrapper}
         messageOneStyle={styles.highLow}
         messageTwoStyle={styles.highLow} />
        <RowText
         messageOne={weather[0]?.description}
         messageTwo={WeatherType[weatherCondition].messageBody} 
         containerStyle={styles.bodyWrapper}
         messageOneStyle={styles.description}
         messageTwoStyle={styles.message} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: 'red',
      // marginTop: StatusBar.currentHeight || 0
    },
    container: {
      // flex: 1,
      alignItems: 'center'
      // justifyContent: 'end'
      // justifyContent: 'center '
    },
    temp: {
      color: 'white',
      fontSize: 48
    },
    feels: {
      color: 'white',
      fontSize: 30
    },
    highLowWrapper: {
      flexDirection: 'row'
    },
    highLow: {
      color: 'white',
      fontSize: 20
    },
    bodyWrapper: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    description: {
      fontSize: 43,
      color: 'white'
    },
    message: {
      fontSize: 25,
      color: 'white'
    }
});
  


export default CurreentWeather