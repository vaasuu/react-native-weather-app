import { Text, View, StyleSheet } from "react-native";

const Header = ({ cityName }) => {
  return (
    <View>
      <Text style={styles.header}>{cityName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
