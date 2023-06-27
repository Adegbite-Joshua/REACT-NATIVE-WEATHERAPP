// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";
import { View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env";
import useGetWeather from "./hooks/useGetWeather";



const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather);
  // if (weather) {
  //   console.log(weather);
  // }

  if (loading) {
    return(
      <SafeAreaView style={{marginTop: StatusBar.currentHeight || 0}}>
        <View style={styles.conainer}>
          <ActivityIndicator size={'large'} color='blue' />
          {/* <Text>{location.coords.longitude}</Text> */}
        </View>
      </SafeAreaView>
    )
  }
  
  return (
    <NavigationContainer>
      <Tabs weather={weather}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conainer: {
    // justifyContent: 'center',
    // flex: 1,
    // flexDirection: 'column'
  }
})

export default App
