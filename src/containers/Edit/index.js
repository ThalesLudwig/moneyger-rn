import React, { useState } from "react";
import { Alert } from "react-native";
import STATUS, { statusName, statusColor } from "../../constants/status";
import MONTHS from "../../constants/months";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Pill from "../../components/Pill";
import { edit, remove } from "../../config/billSlice";
import store from "../../config/store";
import toBrazilianReal from "../../utils/toBrazilianReal";
import {
  SafeContainer,
  Container,
  FormArea,
  Amount,
  DateField,
  Header,
  ButtonWrapper,
  PillsWrapper,
  AmountRow,
} from "./EditStyled";

const Edit = ({ navigation, route }) => {
  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

  const { bill, year, month } = route.params;
  const [status, setStatus] = useState(bill.data?.[year]?.[month]?.status || 0);
  const [receivedOn, setReceivedOn] = useState(
    bill.data?.[year]?.[month]?.receivedOn ? new Date(bill.data?.[year]?.[month]?.receivedOn) : null,
  );
  const [paidOn, setPaidOn] = useState(
    bill.data?.[year]?.[month]?.paidOn ? new Date(bill.data?.[year]?.[month]?.paidOn) : null,
  );
  const [title, setTitle] = useState(bill.title);
  const [amount, setAmount] = useState(bill.data?.[year]?.[month]?.amount || bill.amount || "");
  const [hasWarning, setHasWarning] = useState(false);

  const shouldShowReceived = status !== STATUS.NOT_RECEIVED;
  const shouldShowPaid = status === STATUS.PAID;

  const clearForm = () => {
    setTitle("");
    setAmount(0);
    setStatus(pickerStatus[0]);
    setReceivedOn(null);
    setPaidOn(null);
  };

  const removeComma = (amount) => {
    const parsedAmount = amount.toString().replace(",", ".");
    return parseFloat(parsedAmount);
  };

  const removeDot = (amount) => {
    const parsedAmount = amount.toString().replace(".", ",");
    return parsedAmount;
  };

  const submit = () => {
    const newBill = {
      id: bill.id,
      title: title,
      paidOn: paidOn?.toJSON(),
      amount: removeComma(amount) || 0,
      receivedOn: receivedOn?.toJSON(),
      status: status,
    };
    clearForm();
    store.dispatch(edit({ newBill, month, year }));
    navigation.navigate("Home");
  };

  const removeBill = () => {
    Alert.alert(
      "Remove bill?",
      "Do you really wish to permanently remove this bill? This cannot be undone.",
      [
        { text: "No, cancel", onPress: () => {} },
        {
          text: "Yes, remove",
          onPress: () => {
            store.dispatch(remove(bill.id));
            navigation.navigate("Home");
          },
        },
      ],
      { cancelable: true },
    );
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
        <Input
          icon="file-minus"
          placeholder="Bill name"
          onChange={onTitleChange}
          value={title}
          helper="This will change every month."
          hasHelper={hasWarning}
          fontSize="20px"
          fontWeight="bold"
        />
        <Header>
          <AmountRow>
            <Amount>$</Amount>
            <Input
              placeholder="0,00"
              keyboardType="decimal-pad"
              value={removeDot(amount)}
              onChange={(value) => setAmount(value)}
              fontSize="42px"
              fontWeight="bold"
            />
          </AmountRow>

          <DateField>{`${MONTHS[month]} - ${year}`}</DateField>
        </Header>
        <FormArea>
          {shouldShowReceived && (
            <Input
              mode="date"
              icon="calendar-blank"
              placeholder="Received on"
              value={receivedOn}
              title="Received on"
              onChange={setReceivedOn}
              label="Received on"
            />
          )}
          {shouldShowPaid && (
            <Input
              mode="date"
              icon="calendar-check"
              placeholder="Paid on"
              value={paidOn}
              title="Paid on"
              onChange={setPaidOn}
              label="Paid on"
            />
          )}
        </FormArea>
        <PillsWrapper>
          <Pill
            value={statusName[STATUS.PAID]}
            active={status === STATUS.PAID}
            activeColor={statusColor[STATUS.PAID]}
            onPress={() => setStatus(STATUS.PAID)}
          />
          <Pill
            value={statusName[STATUS.NOT_RECEIVED]}
            active={status === STATUS.NOT_RECEIVED}
            activeColor={statusColor[STATUS.NOT_RECEIVED]}
            onPress={() => setStatus(STATUS.NOT_RECEIVED)}
          />
          <Pill
            value={statusName[STATUS.RECEIVED]}
            active={status === STATUS.RECEIVED}
            activeColor={statusColor[STATUS.RECEIVED]}
            onPress={() => setStatus(STATUS.RECEIVED)}
          />
        </PillsWrapper>
        <ButtonWrapper>
          <Button onPress={submit} value="Submit" disabled={title.trim().length === 0} />
          <Button onPress={removeBill} value="Remove" outlined />
        </ButtonWrapper>
      </Container>
    </SafeContainer>
  );
};

export default Edit;
