import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, Switch, Image } from 'react-native'
import { useGetWeatherData } from './useGetWeatherData'
import LinearGradient from 'react-native-linear-gradient';

function App() {

    const [currentCity, setCurrentCity] = useState();

    const [metric, setMetric] = useState("metric");

    const [request, setRequest] = useState("Helsinki");

    const [temp, weatherData, city, code, tempMax, tempMin, iconURL] = useGetWeatherData(request, metric);

    const date = new Date();

    const localDate = date.toLocaleDateString();

    const [units, setUnits] = useState("°C");

    const [toggle, setToggle] = useState(false)

    let colors;


    switch (weatherData) {

        case 'Clear':
            colors = ['#FF781F', '#CA3433'];
            break;
        case 'Clouds':
            colors = ['#F8F8F8', '#97978F'];
            break;
        case 'Snow':
            colors = ['#1520A6', '#82EEFD'];
            break;
        case 'Rain':
            colors = ['#787276', '#63C5DA'];
            break;
        case 'Haze':
            colors = ['#F8F8F8', '#97978F'];
            break;
        default:
            colors = ['blue', 'white'];
            break;

    }

    return (
        <LinearGradient colors={colors}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <View style={styles.container}>

                <View style={{
                    flexDirection: 'row-reverse', paddingLeft: Dimensions.get('screen').width / 10,
                    marginTop: Dimensions.get('screen').height / 50
                }}>
                    <Text style={styles.tempText}>°F</Text>

                    <Switch value={toggle} onValueChange={(e) => {

                        if (e) {

                            setMetric("imperial");

                            setUnits("°F");

                            setToggle(true);

                        } else {

                            setMetric("metric");

                            setUnits("°C");

                            setToggle(false);

                        }
                    }} />
                    <Text style={styles.tempText}>°C</Text>
                </View>
                <TextInput style={styles.input} value={currentCity} placeholder='Search for a city' placeholderTextColor={'white'} onChangeText={(e) => setCurrentCity(e)} onEndEditing={() => {

                    setRequest(currentCity.trim());
                    setCurrentCity("");

                }} ></TextInput>

                <Text style={styles.city}>{city} {code}</Text>

                <Text style={styles.date}>{localDate}</Text>

                <Text style={styles.temp}>{Math.floor(temp) + units}</Text>

                <Text style={styles.weather}>{weatherData}</Text>

                <Image style={styles.icon} source={{
                    uri: iconURL
                }} />

                <Text style={styles.highLow}>Highest: {Math.floor(tempMax) + units} / Lowest: {Math.floor(tempMin) + units}</Text>

            </View>
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    input: {
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
        color: 'white',
        textAlign: 'center',
        width: (Dimensions.get('screen').width / 2),
        marginLeft: (Dimensions.get('screen').width / 4),
        marginTop: (Dimensions.get('screen').height / 20),
        borderRadius: 30,
        fontSize: 25,
        marginBottom: '3%'
    },
    city: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 40
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
        fontSize: 40,
    },
    highLow: {
        textAlign: 'center',
        justifyContent: 'space-around',
        fontSize: 23,
    },
    tempText: {
        fontSize: 20,
    },
    icon: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'contain',
    }
})

export default App;