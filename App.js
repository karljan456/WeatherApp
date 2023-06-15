import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, Switch } from 'react-native'
import { useGetWeatherData } from './useGetWeatherData'

function App() {

    const [currentCity, setCurrentCity] = useState();

    const [request, setRequest] = useState("Helsinki");

    const [temp, weatherData, city, code, tempMax, tempMin] = useGetWeatherData(request, "metric");

    const date = new Date();

    const localDate = date.toLocaleDateString();

    return (
        <View style={styles.container}>

            <Switch />

            <TextInput style={styles.input} placeholder='Search for a city' placeholderTextColor={'white'} onChangeText={(e) => setCurrentCity(e)} onEndEditing={() => {

                setRequest(currentCity.trim());

            }} ></TextInput>

            <Text style={styles.city}>{city} {code}</Text>

            <Text style={styles.date}>{localDate}</Text>

            <Text style={styles.temp}>{temp}</Text>

            <Text style={styles.weather}>{weatherData}</Text>

            <Text style={styles.highLow}>Highest{tempMax}/Lowest{tempMin}</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    input: {
        backgroundColor: '#C0C0C0',
        color: 'white',
        textAlign: 'center',
        width: (Dimensions.get('screen').width / 2),
        marginLeft: (Dimensions.get('screen').width / 4),
        marginTop: (Dimensions.get('screen').height / 20),
        borderRadius: 30,
        fontSize: 25,
    },
    city: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 40,
        marginBottom: '5%'
    },
    date: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 25
    },
    temp: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 100,
    },
    weather: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 30,
        marginBottom: '5%'
    },
    highLow: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 20,
    }
})

export default App;