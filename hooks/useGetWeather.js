import React, { useState, useEffect } from "react";
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from "@env";

const useGetWeather = () => {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    const [weather, setweather] = useState(null)
    const [lat, setlat] = useState([])
    const [lon, setlon] = useState([])
    // console.log('iskhjgfgf');


    const fetchWeatherData = async () => {
        // console.log('fettttttttttttt');
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
            // console.log(res);
            const data = await res.json()
            setweather(data)
        } catch (e) {
            // console.log(e);
            seterror('Could not fetch weather data')
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                seterror('Permission to location denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setlat(location.coords.latitude)
            setlon(location.coords.longitude)
            await fetchWeatherData()
        })()
    }, [lat, lon])

    return [loading, error, weather]
}

export default useGetWeather