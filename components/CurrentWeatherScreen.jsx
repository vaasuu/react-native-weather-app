import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
} from "react-native";
import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import * as Location from "expo-location";
import myDataContext from "../MyDataContext";

// Weather app with 3 sections
const CurrentWeatherScreen = () => {
  const [error, setError] = useState(null);
  const [weatherJson, setWeatherJson] = useState(null);
  const { apikey, units, city } = React.useContext(myDataContext);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    return location;
  };

  const fetchWeatherCurrentLocationHandler = async () => {
    // Get current location
    const location = await getLocation();
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${lon}&appid=${apikey}`;
    fetchWeatherHandler(url);
  };

  const fetchWeatherByCityHandler = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${city}&appid=${apikey}`;
    fetchWeatherHandler(url, apikey);
  };

  const fetchWeatherHandler = async (url, apikey) => {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) {
      setError(null);
      console.log(json);
      setWeatherJson(json);
    } else {
      setError(
        "Error fetching weather! " +
          "HTTP status code:" +
          response.status +
          " " +
          response.statusText +
          " " +
          json.message
      );

      Alert.alert("Error fetching weather!", json.message, [{ text: "OK" }]);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "lightgray" }}
    >
      {weatherJson && (
        <>
          <Header cityName={weatherJson?.name} style={{ flex: 1 }} />
          <View style={{ flex: 2 }}>
            <WeatherInfo weatherData={weatherJson} units={units} />
          </View>
        </>
      )}
      <View style={{ flex: 1 }}>
        <Button
          style={styles.button}
          title={`Get Weather for ${city}`}
          onPress={() => fetchWeatherByCityHandler(city)}
        />
        <Button
          style={styles.button}
          title="Get Weather for current location"
          onPress={() => fetchWeatherCurrentLocationHandler()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default CurrentWeatherScreen;
