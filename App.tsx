import React from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, Switch } from 'react-native'

function App() {

  return (
    <View style={styles.container}>
      <Switch />
      <TextInput style={styles.input}>Search for a city</TextInput>
      <Text style={styles.city}>City</Text>
      <Text style={styles.date}>Date</Text>
      <Text style={styles.temp}>Temp</Text>
      <Text style={styles.weather}>Weather</Text>
      <Text style={styles.highLow}>Highest/Lowest</Text>
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
    fontSize: 25
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