import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import myDataContext from "../MyDataContext";
import { Picker } from "@react-native-picker/picker";

const SettingsScreen = () => {
  const { apikey, setApikey, units, setUnits, city, setCity } =
    React.useContext(myDataContext);
  const [enteredApiKey, setEnteredApiKey] = useState();
  const [enteredUnits, setEnteredUnits] = useState();
  const [enteredCity, setEnteredCity] = useState();

  return (
    <View>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.text}>Open Weather Map API Key</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your OpenWeatherMap API key"
        secureTextEntry={true}
        onChangeText={(text) => setEnteredApiKey(text)}
      />
      <Text style={styles.text}>Units</Text>
      <Picker
        selectedValue={enteredUnits}
        onValueChange={(unit) => setEnteredUnits(unit)}
      >
        <Picker.Item label="Celsius" value="metric" />
        <Picker.Item label="Fahrenheit" value="imperial" />
      </Picker>
      <Text style={styles.text}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a city"
        onChangeText={(text) => setEnteredCity(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          setApikey(enteredApiKey);
          setUnits(enteredUnits);
          setCity(enteredCity);
        }}
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
    margin: 10,
  },
});

export default SettingsScreen;
