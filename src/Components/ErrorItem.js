import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons";


const ErrorItem = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.errorMessage}>Something went wrong</Text>
        <Feather name='frown' size={100} color='white' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 30,
        flexDirection: 'column',
        // flex: 1,
        height: 600,
        // justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 10
    }
})

export default ErrorItem