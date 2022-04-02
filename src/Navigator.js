import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./containers/Home";
import New from "./containers/New";
import Edit from "./containers/Edit";
import Options from "./containers/Options";
import { withTheme } from "styled-components";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "@expo/vector-icons/Feather";

const Stack = createStackNavigator();
const Tab = AnimatedTabBarNavigator();
const ICON_SIZE = 24;

const HomeNavigator = ({ theme }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.BACKGROUND },
        headerTitleStyle: { color: theme.TEXT },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Despesas" }} />
      <Stack.Screen name="Edit" component={Edit} options={{ title: "Editar Despesa" }} />
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
      <Stack.Screen name="Options" component={Options} options={{ title: "Ajustes" }} />
    </Stack.Navigator>
  );
};

const getRouteIcon = (route, themeColor) => ({
  tabBarIcon: ({ focused, color }) => {
    switch (route) {
      case "Home":
        return <Icon name="home" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      case "Options":
        return <Icon name="settings" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      case "New":
        return <Icon name="plus-circle" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      default:
        return <Icon name="home" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
    }
  },
});

const MainNavigator = ({ theme }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: theme.PRIMARY,
        activeTintColor: "#FFFFFF",
      }}
      backBehavior="history"
      appearance={{
        floating: true,
        tabBarBackground: theme.NAVIGATION,
        bottomPadding: 15,
        topPadding: 15,
      }}
    >
      <Tab.Screen name="Home" component={withTheme(HomeNavigator)} options={getRouteIcon("Home", theme.ICONS)} />
      <Tab.Screen name="New" component={New} options={getRouteIcon("New", theme.ICONS)} />
      <Tab.Screen
        name="Options"
        component={withTheme(OptionsNavigator)}
        options={getRouteIcon("Options", theme.ICONS)}
      />
    </Tab.Navigator>
  );
};

export default withTheme(MainNavigator);
