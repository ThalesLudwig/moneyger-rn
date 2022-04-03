import React from "react";
import { CardWrapper, Amount, Title } from "./CardStyled";

const Card = ({ title, amount, color }) => {
  return (
    <CardWrapper color={color}>
      <Title>{title}</Title>
      <Amount>$ {amount}</Amount>
    </CardWrapper>
  );
};

export default Card;
