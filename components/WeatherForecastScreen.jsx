import { View, Text, Button } from "react-native";

const WeatherForecastScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Weather Forecast Screen</Text>
      <Button
        title="Open Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default WeatherForecastScreen;
