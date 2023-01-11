import { Image, StyleSheet } from "react-native";

const WeatherIcon = ({ iconCode }) => {
  return (
    <>
      <Image
        source={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        style={styles.WeatherIcon}
      />
    </>
  );
};

const styles = StyleSheet.create({
  WeatherIcon: {
    width: 100,
    height: 100,
  },
});

export default WeatherIcon;
