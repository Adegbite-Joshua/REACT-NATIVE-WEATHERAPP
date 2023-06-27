// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";
import { View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env";


const App = () => {
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)
  const [weather, setweather] = useState(null)
  const [lat, setlat] = useState([])
  const [lon, setlon] = useState([])

//
const fetchWeatherData = async()=>{
  try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${WEATHER_API_KEY}`)
    const data = await res.json()
    setweather(data)
  } catch (error) {
    seterror('Could not fetch weather data')
  } finally {
    setloading(false)
  }
}
  useEffect( async() => {
    ;(async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        seterror('Permission to location denied ')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setlat(location.coords.latitude)
      setlon(location.coords.longitude)
    })()
    await fetchWeatherData()
  }, [lat, lon])

  if (weather) {
    console.log(weather);
  }

  if (loading) {
    return(
      <SafeAreaView style={{marginTop: StatusBar.currentHeight || 0}}>
        <View style={styles.conainer}>
          <ActivityIndicator size={'large'} color='blue' />
        </View>
      </SafeAreaView>
    )
  }
  
  return (
    <NavigationContainer>
      <Tabs/>
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
