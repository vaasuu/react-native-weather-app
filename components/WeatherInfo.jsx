import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WeatherIcon from "./WeatherIcon";
import Wind from "./Wind";

const WeatherInfo = ({ weatherData }) => {
  console.log(weatherData);

  const main = weatherData?.weather[0]?.main;
  const icon = weatherData?.weather[0]?.icon;
  const description = weatherData?.weather[0]?.description;
  const temp = weatherData?.main?.temp;
  const feels_like = weatherData?.main?.feels_like;
  const temp_max = weatherData?.main?.temp_max;
  const temp_min = weatherData?.main?.temp_min;
  const speed = weatherData?.wind?.speed;
  const direction = weatherData?.wind?.deg;

  return (
    <>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{main}</Text>
        </View>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <WeatherIcon iconCode={icon} />
            <Text style={styles.text}>{description}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>{temp} °C</Text>
              <Text style={styles.text}>Feels like: {feels_like} °C</Text>
              <Text style={styles.text}>Max: {temp_max} °C</Text>
              <Text style={styles.text}>Min: {temp_min} °C</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Wind speed={speed} direction={direction} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default WeatherInfo;
