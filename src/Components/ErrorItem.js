import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons";


const ErrorItem = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.errorMessage}>Something went wrong</Text>
        <Text style={styles.message}>Try checking your internet connection and location permission</Text>
        <Feather name='frown' size={100} color='white' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 30,
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 10
    },
    message: {
        fontSize: 12,
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 10
    }
})

export default ErrorItem