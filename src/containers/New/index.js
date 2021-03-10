import React, { useState } from "react";
import STATUS, { statusName } from "../../constants/status";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { add } from "../../config/billSlice";
import store from "../../config/store";
import {
  SafeContainer,
  Container,
  Title,
  FormArea,
  TitleWrapper,
} from "./NewStyled";

const New = ({ navigation }) => {
  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

  const [title, setTitle] = useState("");

  const submit = () => {
    const bill = {
      id: new Date().getUTCMilliseconds(),
      title: title,
      amount: 0,
      status: pickerStatus[0].value,
      data: {},
    };
    store.dispatch(add(bill));
    setTitle("");
    navigation.navigate("Home");
  };

  return (
    <SafeContainer>
      <Container>
        <TitleWrapper>
          <Title>Nova Despesa</Title>
        </TitleWrapper>
        <FormArea>
          <Input
            icon="file-edit-outline"
            placeholder="Título da despesa"
            onChange={setTitle}
            value={title}
          />
          <Button
            onPress={submit}
            value="REGISTRAR"
            disabled={title.trim().length === 0}
          />
        </FormArea>
      </Container>
    </SafeContainer>
  );
};

export default New;
