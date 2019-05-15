import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import { ThemeContext } from "../util/ThemeManager";

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
  const { theme } = useContext(ThemeContext);

  return (
    <Text style={[styles.header, styles[`header${theme}`]]}>{children}</Text>
  );
};
