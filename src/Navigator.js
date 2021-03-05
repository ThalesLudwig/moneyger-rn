import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "./containers/Home";
import New from "./containers/New";
import Options from "./containers/Options";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "./constants/colors";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        labelStyle: { fontSize: 12 },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: "home",
            New: "plus-circle-outline",
            Options: "cog",
          };
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
      backBehavior="history"
    >
      <Screen name="Home" component={Home} options={{ title: "Despesas" }} />
      <Screen name="New" component={New} options={{ title: "Adicionar" }} />
      <Screen
        name="Options"
        component={Options}
        options={{ title: "Ajustes" }}
      />
    </Navigator>
  );
}
