import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import WeatherListItem from "./WeatherListItem";
import myDataContext from "../MyDataContext";

const WeatherForecastScreen = () => {
  const { apikey, units, city } = useContext(myDataContext);
  const [error, setError] = useState(null);
  const [weatherJson, setWeatherJson] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=${units}`;
    const response = await fetch(URL);
    const json = await response.json();
    if (response.ok) {
      setError(null);
      console.log(json);
      setWeatherJson(json);
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
  }, [apikey, units, city]);

  return (
    <View>
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
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
  loading: {
    flex: 1,
  },
});
