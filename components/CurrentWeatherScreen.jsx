import React, { useEffect, useState } from "react";
import {
  Platform,
  Alert,
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
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
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy:
        Platform.OS === "android"
          ? Location.Accuracy.Low
          : Location.Accuracy.Lowest,
    });
    return location;
  };

  const fetchWeatherCurrentLocationHandler = async () => {
    // start loading indicator
    setLoading(true);
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
    // start loading indicator
    setLoading(true);

    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) {
      setError(null);
      console.log(json);
      setWeatherJson(json);

      // stop loading indicator
      setLoading(false);
    } else {
      setLoading(false);
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

  // Update weather view when city, apikey or units change
  useEffect(() => {
    if (city) {
      fetchWeatherByCityHandler(city);
    } else {
      weatherJson && setWeatherJson(null);
    }
  }, [apikey, units, city]);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
      {!apikey && (
        <Text style={styles.error}>
          API key missing! Set it in the settings tab.{" "}
        </Text>
      )}
      {weatherJson && (
        <>
          <Header cityName={weatherJson?.name} style={{ flex: 1 }} />
          <View style={{ flex: 2 }}>
            <WeatherInfo weatherData={weatherJson} units={units} />
          </View>
        </>
      )}
      <View style={{ flex: 1 }}>
        {city && (
          <Button
            style={styles.button}
            title={`Get Weather for ${city}`}
            onPress={() => fetchWeatherByCityHandler(city)}
          />
        )}
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
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
  button: {
    margin: 10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  loading: {
    flex: 1,
  },
});

export default CurrentWeatherScreen;
