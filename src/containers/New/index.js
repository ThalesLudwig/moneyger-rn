import React, { useState } from "react";
import STATUS, { statusName } from "../../constants/status";
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
  Checkmark,
} from "./NewStyled";

const New = ({ navigation }) => {
  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

  const [title, setTitle] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const submit = () => {
    setHasSubmitted(true);
    setTimeout(() => {
      const bill = {
        id: new Date().getUTCMilliseconds(),
        title: title,
        amount: 0,
        status: pickerStatus[0].value,
        data: {},
      };
      store.dispatch(add(bill));
      setTitle("");
      setHasSubmitted(false);
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <SafeContainer>
      <Container>
        <MoneyWrapper>
          {!hasSubmitted && <Money />}
          {hasSubmitted && <Checkmark />}
          <MoneyText>Adicionar Despesa</MoneyText>
        </MoneyWrapper>
        <FormArea>
          <Input
            icon="file-edit-outline"
            placeholder="Título da despesa"
            onChange={setTitle}
            value={title}
          />
          <Button
            onPress={submit}
            value="ADICIONAR"
            disabled={title.trim().length === 0}
          />
        </FormArea>
      </Container>
    </SafeContainer>
  );
};

export default New;
