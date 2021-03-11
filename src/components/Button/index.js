import React from "react";
import Touchable from "../Touchable";
import { ButtonWrapper, ButtonIcon, Icon, Title } from "./ButtonStyled";

const ButtonContainer = ({ icon, onPress, value, stretch, disabled }) => {
  return (
    <Touchable onPress={!disabled ? onPress : () => {}}>
      <ButtonWrapper stretch={stretch} disabled={disabled}>
        {!!icon && (
          <ButtonIcon>
            <Icon name={icon} />
          </ButtonIcon>
        )}
        <Title disabled={disabled}>{value}</Title>
      </ButtonWrapper>
    </Touchable>
  );
};

export default ButtonContainer;
