import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons'
import IconText from '../Components/IconText';


const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            source={require('../../assets/contact.png')}
        >
            <Text style={[styles.cityName, styles.cityText]}>London</Text>
            <Text style={[styles.countryName, styles.cityText]}>UK</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                {/* <Feather name='user' size={50} color='red'/>
                <Text style={styles.populationText}>8000</Text> */}
                <IconText iconName='user' iconColor='red' bodyText='80000' bodyTextStyles={styles.populationText} />
            </View>
            <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                <IconText iconName='sunrise' iconColor='white' bodyText='778675656' bodyTextStyles={styles.riseSetText} />
                <IconText iconName='sunrise' iconColor='white' bodyText='778675656' bodyTextStyles={styles.riseSetText} />
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
        // flex: 1,
        backgroundColor: 'royalblue',
        marginTop: StatusBar.currentHeight || 0
    },
    cityName: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center'
    },
    countryName: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    cityText: {
        alignSelf: 'center',
        color: 'white',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        flexDirection: 'row'
    },
    rowLayout: {
        flexDirection: 'row',
        // justifyContent: 'center'
        alignItems: 'center'
    }
})

export default City