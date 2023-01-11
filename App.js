import React, { useState } from "react";
import { Alert, SafeAreaView, View } from "react-native";
import WeatherInfo from "./components/WeatherInfo";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

// Weather app with 3 sections
const App = () => {
  const [error, setError] = useState(null);
  const [weatherJson, setWeatherJson] = useState(null);

  const fetchWeatherHandler = async (location, apikey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apikey}`;
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
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      {weatherJson && (
        <>
          <Header cityName={weatherJson?.name} style={{ flex: 1 }} />
          <View style={{ flex: 4 }}>
            <WeatherInfo weatherData={weatherJson} />
          </View>
        </>
      )}
      <View style={{ flex: 1 }}>
        <Inputs fetchWeatherHandler={fetchWeatherHandler} />
      </View>
    </SafeAreaView>
  );
};

export default App;
