import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CurrentWeatherScreen from "./components/CurrentWeatherScreen";
import ForecastScreen from "./components/WeatherForecastScreen";
import SettingsScreen from "./components/SettingsScreen";

const Stack = createNativeStackNavigator();

// Weather app with 3 screens and navigation between them
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Current Weather" component={CurrentWeatherScreen} />
        <Stack.Screen name="Forecast" component={ForecastScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
