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
  onEdit,
}) => {
  const extraStyles = StyleSheet.create({
    // SHADOWS ARE REMOVED
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

  const parsedTitle = title.length > 48 ? `${title.slice(0, 45)}...` : title;

  // const removeBill = () => {
  //   Alert.alert(
  //     "Remover despesa",
  //     "Deseja remover permanentemente esta despesa? Ela será removida de todos os meses.",
  //     [
  //       { text: "Não", onPress: () => {} },
  //       { text: "Sim", onPress: () => onRemove(id) },
  //     ],
  //     { cancelable: true }
  //   );
  // };

  return (
    <Touchable key={id} onPress={onEdit}>
      <Container status={status}>
        <RowWrapper>
          <ColumnWrapper>
            <TitleStatusWrapper>
              <BillStatus status={status} />
              <Title>{parsedTitle}</Title>
            </TitleStatusWrapper>
            <Amount>R$ {amount || "0.00"}</Amount>
          </ColumnWrapper>
          <ColumnWrapper>
            <TouchableOpacity onPress={onEdit}>
              <Icon name="chevron-right" size={35} />
            </TouchableOpacity>
          </ColumnWrapper>
        </RowWrapper>
      </Container>
    </Touchable>
  );
};

export default Bill;
