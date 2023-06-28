import React from 'react'
import { Feather } from "@expo/vector-icons";
import City from '../Screens/City';
import CurrentWeather from '../Screens/CurrentWeather'
import UpcomingWeather from '../Screens/UpcomingWeather';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Tab = createBottomTabNavigator();
const Tabs = ({weather}) => {
  console.log(weather.list);
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
            backgroundColor: 'lightblue'
        },
        headerStyle: {
            backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
        }
      }}>
        <Tab.Screen name='Current Weather' options={{
          tabBarIcon: ({focused})=> <Feather name='droplet' size={25} color={focused? 'tomato': 'black'} />
        }} >
          {()=> <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen name='Upcoming Weather' options={{
          tabBarIcon: ({focused})=> <Feather name='clock' size={25} color={focused? 'tomato': 'black'} />
        }} >
          {()=> <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen name='City' options={{
          tabBarIcon: ({focused})=> <Feather name='home' size={25} color={focused? 'tomato': 'black'} />
        }} >
          {()=> <City weatherData={weather.city}/>}
        </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs