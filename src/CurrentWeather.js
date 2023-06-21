import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function CurreentWeather () {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 6</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>High: 8</Text>
          <Text style={styles.message}>Low: 6</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center '
    },
    temp: {
      color: 'black',
      fontSize: 48
    },
    feels: {
      color: 'black',
      fontSize: 30
    },
    highLowWrapper: {
      flexDirection: 'row'
    },
    highLow: {
      color: 'black',
      fontSize: 20
    },
    bodyWrapper: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    description: {
      fontSize: 48
    },
    message: {
      fontSize: 30
    }
});
  