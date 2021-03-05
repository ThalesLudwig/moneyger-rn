import React, { useState } from "react";
import STATUS, { statusName } from "../../constants/status";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  SafeContainer,
  Container,
  Title,
  FormArea,
  TitleWrapper,
} from "./NewStyled";

const New = () => {
  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

  const [status, setStatus] = useState(pickerStatus[0]);
  const [receivedOn, setReceivedOn] = useState(null);
  const [paidOn, setPaidOn] = useState(null);
  const [title, setTitle] = useState("");

  const shouldShowAmount = status.value !== STATUS.NOT_RECEIVED;
  const shouldShowReceived = status.value !== STATUS.NOT_RECEIVED;
  const shouldShowPaid = status.value === STATUS.PAID;

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
          />

          {shouldShowAmount && (
            <Input
              icon="credit-card-outline"
              placeholder="R$"
              keyboardType="decimal-pad"
            />
          )}

          <Input
            mode="picker"
            icon="check"
            placeholder="Status da despesa"
            value={status}
            title="Status"
            items={pickerStatus}
            onChange={setStatus}
          />

          {shouldShowReceived && (
            <Input
              mode="date"
              icon="calendar-blank"
              placeholder={
                receivedOn ? receivedOn.toDateString() : "Recebido em"
              }
              value={receivedOn}
              title="Recebido em"
              onChange={setReceivedOn}
            />
          )}

          {shouldShowPaid && (
            <Input
              mode="date"
              icon="calendar-check"
              placeholder={paidOn ? paidOn.toDateString() : "Pago em"}
              value={paidOn}
              title="Pago em"
              onChange={setPaidOn}
            />
          )}

          <Button
            onPress={() => console.log("touch")}
            value="REGISTRAR"
            disabled={title.trim().length === 0}
          />
        </FormArea>
      </Container>
    </SafeContainer>
  );
};

export default New;
