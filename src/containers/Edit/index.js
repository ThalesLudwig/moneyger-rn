import React, { useState } from "react";
import { Alert } from "react-native";
import STATUS, { statusName, statusColor } from "../../constants/status";
import MONTHS from "../../constants/months";
import DateInput from "../../components/DateInput";
import Pill from "../../components/Pill";
import { edit, remove } from "../../config/billSlice";
import { TextInput, Button } from "react-native-paper";
import { SafeContainer, Container, Padding, PillsWrapper, Title } from "./EditStyled";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const Edit = ({ navigation, route }) => {
  const { bill } = route.params;
  const [status, setStatus] = useState(bill.status || 0);
  const [receivedOn, setReceivedOn] = useState(bill.receivedOn || new Date());
  const [paidOn, setPaidOn] = useState(bill.paidOn || new Date());
  const [title, setTitle] = useState(bill.title || "");
  const [amount, setAmount] = useState(bill.amount || 0);
  const dispatch = useDispatch();
  const { value: currentDate } = useSelector((state) => state.date);

  const pickerStatus = [
    { label: statusName[STATUS.NOT_RECEIVED], value: STATUS.NOT_RECEIVED },
    { label: statusName[STATUS.PAID], value: STATUS.PAID },
    { label: statusName[STATUS.RECEIVED], value: STATUS.RECEIVED },
  ];

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
    const editedBill = {
      id: bill.id,
      title: title,
      paidOn: status === STATUS.PAID ? moment(paidOn).format("YYYY-MM-DD") : null,
      amount: removeComma(amount) || 0,
      receivedOn: status === STATUS.PAID || status === STATUS.RECEIVED ? moment(receivedOn).format("YYYY-MM-DD") : null,
      status: status,
    };
    clearForm();
    dispatch(edit(editedBill));
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
            dispatch(remove(bill.id));
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
        <Title>
          {MONTHS[moment(currentDate).format("M")]}, {moment(currentDate).format("YYYY")}
        </Title>
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
        {status !== STATUS.NOT_RECEIVED && (
          <Padding>
            <DateInput placeholder="Received on" value={receivedOn} title="Received on" onChange={setReceivedOn} />
          </Padding>
        )}
        {status === STATUS.PAID && (
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
