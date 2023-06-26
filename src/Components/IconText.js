import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons";


const IconText = ({iconName, iconColor, bodyText, bodyTextStyles}) => {
  return (
    <View style={styles.conatiner}>
        <Feather name={iconName} size={50} color={iconColor} />
        <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText