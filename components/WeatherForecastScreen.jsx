import { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import WeatherListItem from "./WeatherListItem";

const API_KEY = "KEY_HERE";
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Tampere&appid=${API_KEY}&units=metric`;


const WeatherForecastScreen = ({ navigation }) => {
  const [weatherJson, setWeatherJson] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    setWeatherJson(json);
    console.log(json);
  };

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString("fi-FI", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View>
      <Text style={styles.cityHeader}>{weatherJson?.city?.name}</Text>
      {weatherJson && (
        <FlatList
          data={weatherJson.list}
          renderItem={({ item }) => (
            <WeatherListItem
              time={formatDate(item.dt)}
              temperature={item.main.temp}
              description={item.weather[0].main}
              iconCode={item.weather[0].icon}
            />
          )}
          keyExtractor={(item) => item.dt.toString()}
        />
      )}
    </View>
  );
};

export default WeatherForecastScreen;

const styles = StyleSheet.create({
  cityHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
