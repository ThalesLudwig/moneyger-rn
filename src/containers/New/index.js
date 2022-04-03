import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import STATUS from "../../constants/status";
import { add } from "../../config/billSlice";
import store from "../../config/store";
import { TextInput, Button } from "react-native-paper";
import { SafeContainer, Container, Title, InputWrapper, ButtonWrapper } from "./NewStyled";

const New = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const isDisabled = title.trim().length === 0;

  const removeComma = (amount) => {
    if (!amount) return "";
    const parsedAmount = amount.toString().replace(",", ".");
    return parseFloat(parsedAmount);
  };

  const removeDot = (amount) => {
    if (!amount) return "";
    const parsedAmount = amount.toString().replace(".", ",");
    return parsedAmount;
  };

  const onCleanForm = () => {
    setTitle("");
    setAmount(0);
  };

  const onSubmit = () => {
    const bill = {
      id: new Date().getUTCMilliseconds(),
      title: title,
      amount: removeComma(amount) || 0,
      status: STATUS.NOT_RECEIVED,
      data: {},
    };
    store.dispatch(add(bill));
    clearForm();
    navigation.navigate("Home");
  };

  return (
    <SafeContainer>
      <Container>
        <Title>Add a new bill</Title>
        <KeyboardAvoidingView>
          <InputWrapper>
            <TextInput onChangeText={setTitle} value={title} hasBorder label="Bill name" required mode="outlined" />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              placeholder="0,00"
              onChangeText={setAmount}
              value={removeDot(amount)}
              hasBorder
              keyboardType="decimal-pad"
              label="$ 0,00"
              required
              mode="outlined"
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button mode="contained" onPress={onSubmit} disabled={isDisabled}>
              Add new bill
            </Button>
          </ButtonWrapper>
          <Button mode="outlined" onPress={onCleanForm}>
            Clean Form
          </Button>
        </KeyboardAvoidingView>
      </Container>
    </SafeContainer>
  );
};

export default New;
