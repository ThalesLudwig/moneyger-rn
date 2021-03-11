import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import THEMES, { THEME_ENUM } from "../../constants/theme";

const ThemeManager = ({ theme, children }) => {
  const themeSwitcher = () => {
    switch (theme.value) {
      case THEME_ENUM.DARK:
        return THEMES.DARK;
      case THEME_ENUM.LIGHT:
        return THEMES.LIGHT;
      default:
        return THEMES.LIGHT;
    }
  };

  return <ThemeProvider theme={themeSwitcher()}>{children}</ThemeProvider>;
};

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(ThemeManager);
