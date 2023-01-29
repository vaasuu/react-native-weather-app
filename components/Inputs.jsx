import { React, useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const Inputs = ({
  fetchWeatherHandler,
  fetchWeatherCurrentLocationHandler,
}) => {
  const [location, setLocation] = useState("");
  const [apikey, setApikey] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a location"
        onChangeText={(text) => setLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your OpenWeatherMap API key"
        secureTextEntry={true}
        onChangeText={(text) => setApikey(text)}
      />
      <Button
        style={styles.button}
        title="Get Weather for location"
        onPress={() => fetchWeatherHandler(location, apikey)}
      />
      <Button
        style={styles.button}
        title="Get Weather for current location"
        onPress={() => fetchWeatherCurrentLocationHandler(apikey)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 10,
  },
});

export default Inputs;
