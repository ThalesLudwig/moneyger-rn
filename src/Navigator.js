import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./containers/Home";
import New from "./containers/New";
import Edit from "./containers/Edit";
import Options from "./containers/Options";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "./constants/colors";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Despesas" }}
      />
      <Stack.Screen name="Edit" component={Edit} options={{ title: "Editar Despesa" }} />
    </Stack.Navigator>
  );
};

export default function MainNavigator() {
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
      labelPosition="below-icon"
    >
      <Screen
        name="Home"
        component={HomeNavigator}
        options={{ title: "Despesas" }}
      />
      <Screen name="New" component={New} options={{ title: "Adicionar" }} />
      <Screen
        name="Options"
        component={Options}
        options={{ title: "Ajustes" }}
      />
    </Navigator>
  );
}
