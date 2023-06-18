import { useEffect, useState } from "react"
import { Alert } from "react-native";


export const useGetWeatherData = (city = "Helsinki", unit = "metric") => {

    const APIKEY = "03db4e687d3b38ada9e4023c4596fa7b";

    const [temp, setTemp] = useState();

    const [weather, setWeather] = useState();

    const [countryCode, setCountyCode] = useState();

    const [tempMax, setTempMax] = useState();

    const [tempMin, setTempMin] = useState();

    const [iconURL, setIconURL] = useState();

    const [error, setError] = useState(false);

    useEffect(() => {

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKEY + "&units=" + unit)
            .then(response => response.json()).then(data => {

                setTemp(data['main']['temp']);

                setWeather(data['weather'][0]['main']);

                setCountyCode(data['sys']['country']);

                setTempMax(data['main']['temp_max']);

                setTempMin(data['main']['temp_min']);

                setIconURL("http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png")

                setError(false);

            }).catch(() => {
                setError(true);
                Alert.alert('Invalid input', 'Wrong city name');
            })

    }, [city, unit]);

    return [temp, weather, city, countryCode, tempMax, tempMin, iconURL, error];

}