import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**Importando paginas */
import Home from "./src/Pages/Home";
import Game from "./src/Pages/Game";

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerTitle: "Sair" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
