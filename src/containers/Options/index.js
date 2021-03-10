import React from "react";
import { Alert } from "react-native";
import { clear } from "../../config/billSlice";
import store from "../../config/store";
import { SafeContainer, OptionText, Row } from "./OptionsStyled";

const Options = () => {
  const clearData = () => {
    Alert.alert(
      "Limpar dados",
      "Deseja mesmo remover permanentemente todos os dados? Isto não poderá ser desfeito.",
      [
        { text: "Não", onPress: () => {} },
        { text: "Sim", onPress: () => {
          store.dispatch(clear());
          Alert.alert("Dados removidos");
        } },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeContainer>
      <Row onPress={() => clearData()}>
        <OptionText>Limpar dados</OptionText>
      </Row>
      <Row>
        <OptionText>Modo escuro</OptionText>
      </Row>
    </SafeContainer>
  );
};

export default Options;
