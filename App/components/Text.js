import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontWeight: "600",
    fontSize: 22
  }
});

export const Header = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};
