import React, { useState } from "react";
import { Alert } from "react-native";
import STATUS, { statusName, statusColor } from "../../constants/status";
import MONTHS from "../../constants/months";
import DateInput from "../../components/DateInput";
import Pill from "../../components/Pill";
import { edit, remove } from "../../config/billSlice";
import store from "../../config/store";
import { TextInput, Button } from "react-native-paper";
import { SafeContainer, Container, Padding, PillsWrapper, Title } from "./EditStyled";

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

  const onSubmit = () => {
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

  const onRemoveBill = () => {
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

  return (
    <SafeContainer>
      <Container>
        <Title>{`${MONTHS[month]} - ${year}`}</Title>
        <Padding>
          <TextInput
            placeholder="Bill name"
            onChangeText={setTitle}
            value={title}
            hasBorder
            label="Bill name"
            required
            mode="outlined"
          />
        </Padding>
        <Padding>
          <TextInput
            placeholder="0,00"
            onChangeText={setAmount}
            value={removeDot(amount)}
            hasBorder
            keyboardType="decimal-pad"
            label="Value"
            required
            mode="outlined"
            left={<TextInput.Icon name="cash-usd-outline" />}
          />
        </Padding>
        {shouldShowReceived && (
          <Padding>
            <DateInput placeholder="Received on" value={receivedOn} title="Received on" onChange={setReceivedOn} />
          </Padding>
        )}
        {shouldShowPaid && (
          <Padding>
            <DateInput placeholder="Paid on" value={paidOn} title="Paid on" onChange={setPaidOn} />
          </Padding>
        )}
        <Title>Bill status</Title>
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
        <Padding>
          <Button onPress={onSubmit} mode="contained" disabled={title.trim().length === 0}>
            Save changes
          </Button>
        </Padding>
        <Padding>
          <Button onPress={onRemoveBill} mode="outlined" outlined>
            Delete Bill
          </Button>
        </Padding>
      </Container>
    </SafeContainer>
  );
};

export default Edit;
