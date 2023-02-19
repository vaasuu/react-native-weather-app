import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Current Weather") {
                iconName = "cloud-outline";
              } else if (route.name === "Forecast") {
                iconName = "calendar-outline";
              } else if (route.name === "Settings") {
                iconName = "cog-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Current Weather" component={CurrentWeatherScreen} />
          <Tab.Screen name="Forecast" component={ForecastScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </myDataContext.Provider>
  );
};

export default App;
