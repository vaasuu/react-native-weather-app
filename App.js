import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CurrentWeatherScreen from "./components/CurrentWeatherScreen";
import ForecastScreen from "./components/WeatherForecastScreen";
import SettingsScreen from "./components/SettingsScreen";

import myDataContext from "./MyDataContext";

const Tab = createBottomTabNavigator();

// Weather app with 3 screens and navigation between them
const App = () => {
  const [apikey, setApikey] = React.useState("");
  const [city, setCity] = React.useState("");
  const [units, setUnits] = React.useState("");

  return (
    <myDataContext.Provider
      value={{ apikey, setApikey, units, setUnits, city, setCity }}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Current Weather" component={CurrentWeatherScreen} />
          <Tab.Screen name="Forecast" component={ForecastScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </myDataContext.Provider>
  );
};

export default App;
