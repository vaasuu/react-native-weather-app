import React from "react";
import { View } from "react-native";

const WeatherInfo = (temperature, wind, description, weatherSymbol) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, backgroundColor: "lightblue" }} />
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "orange" }} />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, backgroundColor: "brown" }} />
          <View style={{ flex: 1, backgroundColor: "pink" }} />
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;
