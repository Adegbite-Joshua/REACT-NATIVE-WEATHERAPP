import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurreentWeather from '.src/CurreentWeather'


export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CurreentWeather />
    </SafeAreaView>
  );
}
