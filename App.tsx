// App.tsx
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawerNavigator from "./src/navigation/AppDrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
