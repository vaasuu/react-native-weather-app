import React from "react";
import { SafeAreaView, View } from "react-native";
import WeatherInfo from "./components/WeatherInfo";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

// Weather app with 3 sections
const App = () => {
  0;
  const [error, setError] = React.useState(null);
  const [weatherJson, setWeatherJson] = React.useState(null);

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
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Header cityName="Test" style={{ flex: 1 }} />
        <View style={{ flex: 5 }}>
          <WeatherInfo />
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }}>
          <Inputs fetchWeatherHandler={fetchWeatherHandler} error={error} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
