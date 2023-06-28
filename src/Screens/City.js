import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons'
import IconText from '../Components/IconText';
import moment from 'moment'


const City = ({name, country, population, sunrise, sunset}) => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            source={require('../../assets/city.jpg')}
            style={{flex: 1}}
        >
            <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
            <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                <IconText iconName='user' iconColor='red' bodyText={`Population: ${population}`} bodyTextStyles={styles.populationText} />
            </View>
            <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                <IconText iconName='sunrise' iconColor='white' bodyText={`${moment(sunrise).format('h:mm:ss a')}`} bodyTextStyles={styles.riseSetText} />
                <IconText iconName='sunrise' iconColor='white' bodyText={`${moment(sunset).format('h:mm:ss a')}`} bodyTextStyles={styles.riseSetText} />
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
        flex: 1,
        backgroundColor: 'royalblue',
        justifyContent: 'center'
        // marginTop: StatusBar.currentHeight || 0
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