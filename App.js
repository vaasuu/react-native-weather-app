import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CurrentWeatherScreen from "./components/CurrentWeatherScreen";
import ForecastScreen from "./components/WeatherForecastScreen";
import SettingsScreen from "./components/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Weather app with 3 screens and navigation between them
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current Weather" component={CurrentWeatherScreen} />
        <Tab.Screen name="Forecast" component={ForecastScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
