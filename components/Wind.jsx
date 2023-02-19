import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Wind = ({ speed, direction, unit }) => {
  const styles = StyleSheet.create({
    windDirectionIcon: {
      fontSize: 50,
      transform: [{ rotate: direction + "deg" }],
      textAlignVertical: "center",
      textAlign: "center",
      width: 50,
      height: 50,
    },
    container: {
      flex: 1,
      flexDirection: "column",
    },
    text: {
      fontSize: 20,
      padding: 10,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Wind: {speed} {unit}
        </Text>
        <Text style={styles.text}>Wind direction: {direction} °</Text>
        <Text style={styles.windDirectionIcon}>↓</Text>
      </View>
    </>
  );
};

export default Wind;
