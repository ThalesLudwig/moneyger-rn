import React, { useState } from "react";
import STATUS, { statusName, statusColor } from "../../constants/status";
import MONTHS from "../../constants/months";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { edit } from "../../config/billSlice";
import store from "../../config/store";
import { SafeContainer, Container, FormArea } from "./EditStyled";

const Edit = ({ navigation, route }) => {
  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

  const { bill, year, month } = route.params;
  const [status, setStatus] = useState(pickerStatus[bill.data?.[year]?.[month]?.status || 0]);
  const [receivedOn, setReceivedOn] = useState(
    bill.data?.[year]?.[month]?.receivedOn ? new Date(bill.data?.[year]?.[month]?.receivedOn) : null
  );
  const [paidOn, setPaidOn] = useState(
    bill.data?.[year]?.[month]?.paidOn ? new Date(bill.data?.[year]?.[month]?.paidOn) : null
  );
  const [title, setTitle] = useState(bill.title);
  const [amount, setAmount] = useState(bill.data?.[year]?.[month]?.amount || "");
  const [hasWarning, setHasWarning] = useState(false);

  const shouldShowAmount = status.value !== STATUS.NOT_RECEIVED;
  const shouldShowReceived = status.value !== STATUS.NOT_RECEIVED;
  const shouldShowPaid = status.value === STATUS.PAID;

  const clearForm = () => {
    setTitle("");
    setAmount(0);
    setStatus(pickerStatus[0]);
    setReceivedOn(null);
    setPaidOn(null);
  };

  const submit = () => {
    const newBill = {
      id: bill.id,
      title: title,
      paidOn: paidOn?.toJSON(),
      amount: amount,
      receivedOn: receivedOn?.toJSON(),
      status: status.value,
    };
    clearForm();
    store.dispatch(edit({ newBill, month, year }));
    navigation.navigate("Home");
  };

  const onTitleChange = (text) => {
    setTitle(text);
    if (text !== bill.title) {
      setHasWarning(true);
    } else {
      setHasWarning(false);
    }
  };

  return (
    <SafeContainer>
      <Container>
        <FormArea>
          <Input
            icon="file-edit-outline"
            placeholder="Título da despesa"
            onChange={onTitleChange}
            value={title}
            helper="Isto será alterado em todos os meses"
            hasHelper={hasWarning}
          />

          {shouldShowAmount && (
            <Input
              icon="credit-card-outline"
              placeholder="R$"
              keyboardType="decimal-pad"
              value={amount}
              onChange={(value) => setAmount(value)}
            />
          )}

          <Input
            mode="picker"
            icon="check"
            iconColor={statusColor[status.value]}
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
            onPress={submit}
            value={`EDITAR EM ${MONTHS[month].toUpperCase()}`}
            disabled={title.trim().length === 0}
          />
        </FormArea>
      </Container>
    </SafeContainer>
  );
};

export default Edit;
