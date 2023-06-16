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

    return (
        <LinearGradient colors={['#FF781F', '#CA3433']}
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
            <TextInput style={styles.input} placeholder='Search for a city' placeholderTextColor={'black'} onChangeText={(e) => setCurrentCity(e)} onEndEditing={() => {

                setRequest(currentCity.trim());

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
        backgroundColor: '#C0C0C0',
        color: 'black',
        textAlign: 'center',
        width: (Dimensions.get('screen').width / 2),
        marginLeft: (Dimensions.get('screen').width / 4),
        marginTop: (Dimensions.get('screen').height / 20),
        borderRadius: 30,
        fontSize: 25,
        marginBottom: '5%'
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
    icon:{
        width:Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'contain'
    }
})

export default App;