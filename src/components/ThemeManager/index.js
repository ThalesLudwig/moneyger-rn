import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { THEME_ENUM } from "../../constants/theme";
import { useTheme } from "../../hooks/useTheme";
import { useSelector } from "react-redux";

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

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBarSwitcher()} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeManager;
