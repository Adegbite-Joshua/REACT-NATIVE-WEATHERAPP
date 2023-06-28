// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";
import { View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env";
import useGetWeather from "./hooks/useGetWeather";
import ErrorItem from "./src/Components/ErrorItem";



const App = () => {
  const [loading, error, weather] = useGetWeather()
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );  }

  return (
    <View style={styles.conainer}>
      {error ? (
        <ErrorItem />
      ) : (<SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
          <ActivityIndicator size={'large'} color='blue' />
        </SafeAreaView>)}
    </View>
  )
  
}

const styles = StyleSheet.create({
  conainer: {
    justifyContent: 'center',
    flex: 1,
    // flexDirection: 'column'
  }
})

export default App
