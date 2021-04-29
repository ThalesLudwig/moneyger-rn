import React from "react";
import Touchable from "../Touchable";
import { ButtonWrapper, ButtonIcon, Icon, Title } from "./ButtonStyled";

const ButtonContainer = ({ icon, onPress, value, disabled, outlined }) => {
  return (
    <Touchable onPress={!disabled ? onPress : () => {}}>
      <ButtonWrapper disabled={disabled} outlined={outlined}>
        {!!icon && (
          <ButtonIcon>
            <Icon name={icon} />
          </ButtonIcon>
        )}
        <Title outlined={outlined} disabled={disabled}>{value}</Title>
      </ButtonWrapper>
    </Touchable>
  );
};

export default ButtonContainer;
