import React from "react";
import { View } from "react-native";

export default ({ children, style }) => (
  <View style={[{ flex: 1 }, style]}>{children}</View>
);
