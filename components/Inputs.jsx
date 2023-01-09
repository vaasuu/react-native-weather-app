import { React, useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import ErrorThing from "./ErrorThing";

const Inputs = ({ fetchWeatherHandler, error }) => {
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
        title="Get Weather"
        onPress={() => fetchWeatherHandler(location, apikey)}
      />

      {error && <ErrorThing error={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
  },
});

export default Inputs;
