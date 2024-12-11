// App.tsx
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/main/HomeScreen";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
