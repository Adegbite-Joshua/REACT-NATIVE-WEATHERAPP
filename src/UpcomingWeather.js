// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Feather } from "@expo/vector-icons";

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
const Item =(props)=>{
  const {dt_txt, min, max, condition} = props
  return(
    <View style={styles.item}>
      <Feather name='sun' size={50} color='white' />
      <Text style={styles.dt_txt}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather =()=>{
  const renderItem =({item})=>(<Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />)
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>Upcoming Weather</Text>
    </View>
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight || 0
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
  }
})

export default UpcomingWeather