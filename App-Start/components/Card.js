import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

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
  return <View style={styles.separator} />;
};

export default ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};
