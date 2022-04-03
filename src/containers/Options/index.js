import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";
import { clear } from "../../config/billSlice";
import { darkMode, lightMode } from "../../config/themeSlice";
import store from "../../config/store";
import { THEME_ENUM } from "../../constants/theme";
import { SafeContainer, SwitchWrapper } from "./OptionsStyled";
import { showInstructions } from "../../config/instructionsSlice";
import { Switch, Subheading, Divider } from "react-native-paper";

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

  return (
    <SafeContainer>
      <SwitchWrapper>
        <Subheading>Dark Mode</Subheading>
        <Switch value={theme.value === 0} onValueChange={switchTheme} />
      </SwitchWrapper>
      <Divider />
      <SwitchWrapper>
        <Subheading>Clear data</Subheading>
        <Switch value={false} onValueChange={clearData} />
      </SwitchWrapper>
    </SafeContainer>
  );
};

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(Options);
