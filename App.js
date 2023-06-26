// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import City from './src/Screens/City';
import CurrentWeather from './src/Screens/CurrentWeather'
import UpcomingWeather from './src/Screens/UpcomingWeather';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const App = () => {
  return (
    <NavigationContainer>
      <View>
        {/* <Text>ewklkmjkjcgfcgfcffdxfdxdxcxcxcxr</Text> */}
        <CurrentWeather />
        {/* <Text>yftfdcjkhjkrhjhjhejfhjhthfd</Text> */}
      </View>
    </NavigationContainer>
  );
}

export default App
