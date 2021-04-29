import React from "react";
import Touchable from "../Touchable";
import { PillWrapper, Title } from "./PillStyled";

const Pill = ({ onPress, value, active, activeColor }) => {
  return (
    <Touchable onPress={onPress}>
      <PillWrapper active={active} activeColor={activeColor}>
        <Title active={active}>{value}</Title>
      </PillWrapper>
    </Touchable>
  );
};

export default Pill;
