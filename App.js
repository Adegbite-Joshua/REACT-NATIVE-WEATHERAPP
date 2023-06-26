// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";
import { View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar } from "react-native";


const App = () => {
  const [loading, setloading] = useState(true)
  const [location, setlocation] = useState(true)
  const [error, seterror] = useState(true)
  if (loading) {
    return(
      <SafeAreaView style={{marginTop: StatusBar.currentHeight || 0}}>
        <View style={styles.conainer}>
          <ActivityIndicator size={'large'} color='blue' />
        </View>
      </SafeAreaView>
    )
  }

  useEffect(() => {
    (async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        seterror('Permission to location denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setlocation(location)
    })
  }, [])
  
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conainer: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
