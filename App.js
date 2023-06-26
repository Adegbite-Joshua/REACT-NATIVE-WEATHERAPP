import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/CurrentWeather'
import UpcomingWeather from './src/UpcomingWeather';



const App = () => {
  return (
    <View>
      <UpcomingWeather />
      {/* <Text>yftfdcjkhjkrhjhjhejfhjhthfd</Text> */}
    </View>
  );
}

export default App
