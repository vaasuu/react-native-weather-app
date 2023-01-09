import { View, StyleSheet } from "react-native";

const ErrorThing = () => {
  return <View>{<Text style={styles.errorText}>{error}</Text>}</View>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});

export default ErrorThing;
