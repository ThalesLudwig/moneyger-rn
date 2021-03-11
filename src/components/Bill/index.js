import React from "react";
import { StyleSheet, Alert, TouchableOpacity } from "react-native";
import Touchable from "../Touchable";
import COLORS from "../../constants/colors";
import moment from "moment";
import {
  Container,
  RowWrapper,
  Text,
  Title,
  BillStatus,
  ColumnWrapper,
  Icon,
  Amount,
  TitleStatusWrapper,
} from "./BillStyled";

const Bill = ({
  id,
  status,
  title,
  amount = "0,00",
  paidOn,
  receivedOn,
  onRemove,
  onEdit,
}) => {
  const extraStyles = StyleSheet.create({
    shadows: {
      shadowColor: COLORS.GREY,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1.23,
      shadowRadius: 2.62,
      elevation: 5,
    },
  });

  const removeBill = () => {
    Alert.alert(
      "Remover despesa",
      "Deseja remover permanentemente esta despesa? Ela será removida de todos os meses.",
      [
        { text: "Não", onPress: () => {} },
        { text: "Sim", onPress: () => onRemove(id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <Touchable onPress={onEdit}>
      <Container status={status}>
        <RowWrapper>
          <ColumnWrapper>
            <TitleStatusWrapper>
              <Title>{title}</Title>
              <BillStatus status={status} />
            </TitleStatusWrapper>
            {receivedOn && <Text>Recebido: {moment(receivedOn).format("DD/MM/YYYY")}</Text>}
            {paidOn && <Text>Pago: {moment(paidOn).format("DD/MM/YYYY")}</Text>}
            <Amount>R$ {amount || "0.00"}</Amount>
          </ColumnWrapper>
          <ColumnWrapper>
            <TouchableOpacity onPress={onEdit}>
              <Icon name="square-edit-outline" size={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={removeBill}>
              <Icon name="delete-outline" size={35} />
            </TouchableOpacity>
          </ColumnWrapper>
        </RowWrapper>
      </Container>
    </Touchable>
  );
};

export default Bill;
