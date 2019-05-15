import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import { ThemeContext } from "../util/ThemeManager";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10
  },
  text: {
    fontSize: 18,
    color: "#212121"
  },
  textdark: {
    color: "#fff"
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  separatordark: {
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  }
});

export const Separator = () => {
  const { theme } = useContext(ThemeContext);

  return <View style={[styles.separator, styles[`separator${theme}`]]} />;
};

export default ({ item, onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, styles[`text${theme}`]]}>{item.title}</Text>
    </TouchableOpacity>
  );
};
