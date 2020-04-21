import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BoxesScreen from "./src/screens/BoxesScreen";
import FlexDemo from "./src/screens/FlexDemo";
import PlaygroundScreen from "./src/screens/PlaygroundScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListsScreen from "./src/screens/ListsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Boxes: BoxesScreen,
    Flex: FlexDemo,
    Play: PlaygroundScreen,
    ComponentsScreen: ComponentsScreen,
    ListsScreen: ListsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
