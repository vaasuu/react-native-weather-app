import { Text, StyleSheet } from "react-native";

const Header = ({ cityName }) => {
  return (
    <>
      <Text style={styles.header}>{cityName}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
});

export default Header;
