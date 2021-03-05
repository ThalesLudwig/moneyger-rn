import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Touchable from "../Touchable";
import COLORS from "../../constants/colors";
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

const Bill = ({ status, title, amount = "0,00", paidOn, receivedOn }) => {
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

  return (
    <Touchable>
      <Container status={status} style={extraStyles.shadows}>
        <RowWrapper>
          <ColumnWrapper>
            <TitleStatusWrapper>
              <Title>{title}</Title>
              <BillStatus status={status} />
            </TitleStatusWrapper>
            {receivedOn && <Text>Recebido: 00/00/0000</Text>}
            {paidOn && <Text>Pago: 00/00/0000</Text>}
            {amount && <Amount>R$ {amount}</Amount>}
          </ColumnWrapper>
          <ColumnWrapper>
            <TouchableOpacity>
              <Icon name="square-edit-outline" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="delete-outline" size={35} />
            </TouchableOpacity>
          </ColumnWrapper>
        </RowWrapper>
      </Container>
    </Touchable>
  );
};

export default Bill;
