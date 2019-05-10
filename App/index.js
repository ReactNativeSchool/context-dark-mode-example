import { createAppContainer, createStackNavigator } from "react-navigation";

import List from "./screens/List";
import Details from "./screens/Details";

const App = createStackNavigator({
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
});

export default createAppContainer(App);
