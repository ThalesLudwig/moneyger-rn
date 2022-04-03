import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";
import { clear } from "../../config/billSlice";
import { darkMode, lightMode } from "../../config/themeSlice";
import store from "../../config/store";
import { THEME_ENUM } from "../../constants/theme";
import { SafeContainer, OptionText, Row } from "./OptionsStyled";
import { showInstructions } from "../../config/instructionsSlice";

const Options = ({ theme }) => {
  const clearData = () => {
    Alert.alert(
      "Clear data?",
      "Do you really wish to permanently remove all data? This cannot be undone.",
      [
        { text: "No, cancel", onPress: () => {} },
        {
          text: "Yes, remove",
          onPress: () => {
            store.dispatch(clear());
            store.dispatch(showInstructions());
            Alert.alert("Data removed");
          },
        },
      ],
      { cancelable: true },
    );
  };

  const switchTheme = () => {
    switch (theme.value) {
      case THEME_ENUM.DARK:
        store.dispatch(lightMode());
        break;
      case THEME_ENUM.LIGHT:
        store.dispatch(darkMode());
        break;
      default:
        break;
    }
  };

  const getThemeOption = () => {
    switch (theme.value) {
      case THEME_ENUM.DARK:
        return "Light Mode";
      case THEME_ENUM.LIGHT:
        return "Dark Mode";
      default:
        return "Change color scheme";
    }
  };

  return (
    <SafeContainer>
      <Row onPress={clearData}>
        <OptionText>Clear data</OptionText>
      </Row>
      <Row onPress={switchTheme}>
        <OptionText>{getThemeOption()}</OptionText>
      </Row>
    </SafeContainer>
  );
};

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(Options);
