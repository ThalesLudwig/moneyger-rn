import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { THEME_ENUM } from "../../constants/theme";
import { useTheme } from "../../hooks/useTheme";
import { useSelector } from "react-redux";
import { DefaultTheme as PaperTheme, Provider as PaperProvider } from "react-native-paper";

const ThemeManager = ({ children }) => {
  const { value: currentThemeValue } = useSelector((state) => state.theme);
  const theme = useTheme();

  const statusBarSwitcher = () => {
    switch (currentThemeValue) {
      case THEME_ENUM.DARK:
        return "light";
      case THEME_ENUM.LIGHT:
        return "dark";
      default:
        return "auto";
    }
  };

  const paperTheme = {
    ...PaperTheme,
    roundness: 10,
    dark: currentThemeValue === 0,
    colors: {
      ...PaperTheme.colors,
      primary: theme.PRIMARY,
      accent: theme.PRIMARY,
      text: theme.TEXT,
      background: theme.BACKGROUND,
      disabled: theme.DISABLED,
      placeholder: theme.DISABLED,
      surface: theme.CARD,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBarSwitcher()} />
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
    </ThemeProvider>
  );
};

export default ThemeManager;
