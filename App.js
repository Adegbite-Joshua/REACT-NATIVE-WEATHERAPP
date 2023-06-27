// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";
import { View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env";


const App = () => {
  const [loading, setloading] = useState(true)
  const [location, setlocation] = useState(null)
  const [error, seterror] = useState(null)
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  useEffect(() => {
    ;(async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        seterror('Permission to location denied ')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setlocation(location)
      console.log(location);
    })()
  }, [])

  if (location) {
    console.log(location);
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
