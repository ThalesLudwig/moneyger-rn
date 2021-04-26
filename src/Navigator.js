import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./containers/Home";
import New from "./containers/New";
import Edit from "./containers/Edit";
import Options from "./containers/Options";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { Navigator, Screen } = createBottomTabNavigator();
import { withTheme } from "styled-components";

const Stack = createStackNavigator();

const HomeNavigator = ({ theme }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.BACKGROUND },
        headerTitleStyle: { color: theme.TEXT },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Despesas" }}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{ title: "Editar Despesa" }}
      />
    </Stack.Navigator>
  );
};

const OptionsNavigator = ({ theme }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: theme.CARD },
        headerTitleStyle: { color: theme.TEXT },
      }}
    >
      <Screen
        name="Options"
        component={Options}
        options={{ title: "Ajustes" }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = ({ theme }) => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.PRIMARY_ALT,
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: theme.CARD,
          borderTopColor: theme.CARD,
        },
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
        component={withTheme(HomeNavigator)}
        options={{ title: "Despesas" }}
      />
      <Screen name="New" component={New} options={{ title: "Adicionar" }} />
      <Screen
        name="Options"
        component={withTheme(OptionsNavigator)}
        options={{ title: "Ajustes" }}
      />
    </Navigator>
  );
};

export default withTheme(MainNavigator);
