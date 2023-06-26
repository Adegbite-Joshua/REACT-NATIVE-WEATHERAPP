import React from 'react'
import { Feather } from "@expo/vector-icons";
import City from '../Screens/City';
import CurrentWeather from '../Screens/CurrentWeather'
import UpcomingWeather from '../Screens/UpcomingWeather';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Tab = createBottomTabNavigator();
const Tabs = () => {
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
        <Tab.Screen name='Current Weather' component={CurrentWeather} options={{
          tabBarIcon: ({focused})=> <Feather name='droplet' size={25} color={focused? 'tomato': 'black'} />
        }} />
        <Tab.Screen name='Upcoming Weather' component={UpcomingWeather} options={{
          tabBarIcon: ({focused})=> <Feather name='clock' size={25} color={focused? 'tomato': 'black'} />
        }} />
        <Tab.Screen name='City' component={City} options={{
          tabBarIcon: ({focused})=> <Feather name='home' size={25} color={focused? 'tomato': 'black'} />
        }} />
    </Tab.Navigator>
  )
}

export default Tabs