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
      "Limpar dados",
      "Deseja mesmo remover permanentemente todos os dados? Isto não poderá ser desfeito.",
      [
        { text: "Não", onPress: () => {} },
        {
          text: "Sim",
          onPress: () => {
            store.dispatch(clear());
            store.dispatch(showInstructions());
            Alert.alert("Dados removidos");
          },
        },
      ],
      { cancelable: true }
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
        return "Modo Claro";
      case THEME_ENUM.LIGHT:
        return "Modo Escuro";
      default:
        return "Alterar modo de cores";
    }
  };

  return (
    <SafeContainer>
      <Row onPress={clearData}>
        <OptionText>Limpar dados</OptionText>
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
