import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import axios from 'axios'
import React from 'react'
import Search from './Components/Search'

const API_TOKEN =
  'beff0b2665689f298e408220eda60e6d3febb2a72b1e16cca5d1e2ec39df9f14'

const App = () => {
  const getCall = () => {
    axios
      .get(
        'https://api.meteo-concept.com/api/location/city?token=' +
          API_TOKEN +
          '&insee=35238'
      )
      .then(function (response) {
        alert(JSON.stringify(response.data))
      })
  }

  const getCallWithStatus = async () => {
    try {
      const response = await axios.get(
        'https://api.meteo-concept.com/api/location/city?token=' +
          API_TOKEN +
          '&insee=35238'
      )
      alert('Code réponse : ' + JSON.stringify(response.status))
    } catch (error) {
      alert(error.message)
    }
  }

  const getCallStrasbourgWithStatus = () => {
    axios
      .get(
        'https://api.meteo-concept.com/api/location/city?token=' +
          API_TOKEN +
          '&insee=67482'
      )
      .then(function (response) {
        alert(
          'Code réponse : ' +
            JSON.stringify(response.status) +
            ' ' +
            'Info Strasbourg : ' +
            JSON.stringify(response.data)
        )
      })
  }

  const getCallStrasbourgWithSun = () => {
    axios
      .get(
        'https://api.meteo-concept.com/api/ephemeride/0?token=' +
          API_TOKEN +
          '&insee=67482'
      )
      .then(function (response) {
        alert(
          'Heure du levé de soleil : ' +
            JSON.stringify(response.data.ephemeride.sunrise) +
            ' ' +
            'Heure du couché de soleil : ' +
            JSON.stringify(response.data.ephemeride.sunset)
        )
      })
  }

  const getCallStrasbourgNextHours = () => {
    axios
      .get(
        'https://api.meteo-concept.com/api/forecast/nextHours?token=' +
          API_TOKEN +
          '&insee=67482'
      )
      .then(function (response) {
        alert(
          'Informations importantes pour les 12 prochaines heures : ' +
            JSON.stringify(response.data.forecast)
        )
      })
  }

  const getCallStrasbourgWeather = () => {
    axios
      .get(
        'https://api.meteo-concept.com/api/forecast/daily/0/hourly?token=' +
          API_TOKEN +
          '&insee=67482'
      )
      .then(function (response) {
        alert(
          'Weather codes Temps sensible cette nuit à Strasbourg : ' +
            JSON.stringify(response.data.forecast.weather)
        )
      })
  }



  return (
    
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Application météo
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity style={styles.buttonStyle} onPress={getCall}>
        <Text>Requete GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getCallStrasbourgWithStatus}
      >
        <Text>Requete de la ville de Strasbourg + Code retour</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getCallStrasbourgWithSun}
      >
        <Text>Levé et couché de soleil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getCallStrasbourgNextHours}
      >
        <Text>Informations météo sur les prochaines heures à Strasbourg</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getCallStrasbourgWeather}
      >
        <Text>Donnée sensible weather à Strasbourg</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
})

export default App
