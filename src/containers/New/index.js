import React, { useState } from "react";
import STATUS from "../../constants/status";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { add } from "../../config/billSlice";
import store from "../../config/store";
import {
  SafeContainer,
  Container,
  FormArea,
  MoneyWrapper,
  Money,
  MoneyText,
  ButtonArea,
  InputWrapper,
} from "./NewStyled";

const New = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const submit = () => {
    const bill = {
      id: new Date().getUTCMilliseconds(),
      title: title,
      amount: amount,
      status: STATUS.NOT_RECEIVED,
      data: {},
    };
    store.dispatch(add(bill));
    setTitle("");
    setAmount(0);
    navigation.navigate("Home");
  };

  return (
    <SafeContainer>
      <Container>
        <MoneyWrapper>
          <Money />
          <MoneyText>Adicionar Despesa</MoneyText>
        </MoneyWrapper>
        <FormArea>
          <InputWrapper>
            <Input
              icon="file-edit-outline"
              placeholder="Ex: Aluguel"
              onChange={setTitle}
              value={title}
              hasBorder
              label="Título da despesa"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              icon="credit-card-outline"
              placeholder="0,00"
              onChange={setAmount}
              value={amount}
              hasBorder
              keyboardType="decimal-pad"
              label="Valor inicial"
            />
          </InputWrapper>
        </FormArea>
        <ButtonArea>
          <Button
            onPress={submit}
            value="Adicionar"
            disabled={title.trim().length === 0}
          />
        </ButtonArea>
      </Container>
    </SafeContainer>
  );
};

export default New;
