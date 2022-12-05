import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const App = () => {
  const [location, setLocation] = React.useState("");
  const [apikey, setApikey] = React.useState("");
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

  const Weather = (props) => {
    if (props.weatherJson != null) {
      return (
        <View style={styles.weather}>
          <Text style={styles.weatherText}>
            {props.weatherJson.name}, {weatherJson.sys.country}
          </Text>
          <Text style={styles.weatherText}>
            {props.weatherJson.weather[0].description}
          </Text>
          <Text style={styles.weatherText}>
            {props.weatherJson.main.temp} °C, humidity{" "}
            {props.weatherJson.main.humidity} %
          </Text>
        </View>
      );
    }
  };

  let body;
  if (error) {
    body = <Text style={styles.errorText}>{error}</Text>;
  } else {
    body = <Weather weatherJson={weatherJson} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter a location"
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your OpenWeatherMap API key"
          secureTextEntry={true}
          onChangeText={(text) => setApikey(text)}
        />
        <Button
          title="Get Weather"
          onPress={() => fetchWeatherHandler(location, apikey)}
        />

        <Text>{body}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    color: "red",
  },
  weather: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  weatherText: {
    fontSize: 20,
  },
});

export default App;
