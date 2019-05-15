import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "../util/ThemeManager";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerlight: {
    backgroundColor: "#fff"
  },
  containerdark: {
    backgroundColor: "#212121"
  }
});

export default ({ children, style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, styles[`container${theme}`], style]}>
      {children}
    </View>
  );
};
