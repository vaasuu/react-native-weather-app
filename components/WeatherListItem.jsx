import { StyleSheet, Text, View } from "react-native";
import WeatherIcon from "./WeatherIcon";

const WeatherListItem = ({ time, description, temperature, iconCode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{temperature}</Text>
      <WeatherIcon iconCode={iconCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});

export default WeatherListItem;
