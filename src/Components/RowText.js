import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons";

 
const RowText = ({messageOne, messageTwo, messageOneStyle, messageTwoStyle, containerStyle}) => {
  return (
    <View style={containerStyle}>
        <Text style={messageOneStyle}>{messageOne}</Text>
        <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

export default RowText