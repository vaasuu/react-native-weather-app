import React from "react";
import { View } from "react-native";
import WeatherInfo from "./components/WeatherInfo";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

// Weather app with 3 sections
const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Header />
      </View>
      <View style={{ flex: 5 }}>
        <WeatherInfo /> {/* Weather info */}
      </View>
      <View style={{ flex: 2, backgroundColor: "green" }}>
        <Inputs />
      </View>
    </View>
  );
};

export default App;
