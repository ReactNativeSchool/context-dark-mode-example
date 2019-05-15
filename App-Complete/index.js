import React, { useContext } from "react";
import { Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { ThemeContext, ThemeProvider } from "./util/ThemeManager";

import List from "./screens/List";
import Details from "./screens/Details";

const Toggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <Button
      onPress={toggleTheme}
      title="Toggle"
      color={theme === "dark" ? "#fff" : "#212121"}
    />
  );
};

const App = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        headerTitle: "List"
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        headerTitle: "Details"
      }
    }
  },
  {
    defaultNavigationOptions: ({ screenProps }) => ({
      headerRight: <Toggle />,
      headerTintColor: screenProps.theme === "dark" ? "#fff" : "#212121",
      headerStyle: {
        backgroundColor: screenProps.theme === "dark" ? "#212121" : "#fff"
      }
    })
  }
);

const Navigation = createAppContainer(App);

const NavWithTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <Navigation screenProps={{ theme }} />;
};

export default () => {
  return (
    <ThemeProvider>
      <NavWithTheme />
    </ThemeProvider>
  );
};
