// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons";
import ListItem from '../Components/ListItem';

const DATA = [
  {
    dt_txt: '2022 34 45',
    main: {
      temp_max: 87,
      temp_min: 847
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2022 34 45',
    main: {
      temp_max: 87,
      temp_min: 847
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2022 34 45',
    main: {
      temp_max: 87,
      temp_min: 847
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  }
]

const UpcomingWeather =({weatherData})=>{
  const renderItem =({item})=>(<ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/cloud.jpg')}
        style={styles.image}
      >
        <View>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
          />
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
    // marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    // flex: 1
  }
})

export default UpcomingWeather