import React from "react";
import { TouchableOpacity } from "react-native";
import Touchable from "../Touchable";
import { truncate } from "lodash";
import {
  Container,
  RowWrapper,
  Title,
  BillStatus,
  ColumnWrapper,
  Icon,
  Amount,
  TitleStatusWrapper,
} from "./BillStyled";

const Bill = ({ id, status, title, amount = "0,00", onEdit }) => {
  return (
    <Touchable key={id} onPress={onEdit}>
      <Container status={status}>
        <RowWrapper>
          <ColumnWrapper>
            <TitleStatusWrapper>
              <BillStatus status={status} />
              <Title>{truncate(title, { length: 48 })}</Title>
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
