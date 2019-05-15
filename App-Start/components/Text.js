import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontWeight: "600",
    fontSize: 22,
    color: "#212121"
  },
  headerdark: {
    color: "#fff"
  }
});

export const Header = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};
