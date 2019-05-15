import React from "react";
import { View, StyleSheet } from "react-native";

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
  return <View style={[styles.container, style]}>{children}</View>;
};
