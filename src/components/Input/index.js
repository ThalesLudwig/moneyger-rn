import React from "react";
import {
  Input,
  InputWrapper,
  InputIcon,
  Icon,
  Picker,
  DatePicker,
  Helper,
  HelperWrapper,
} from "./InputStyled";

const InputContainer = ({
  icon,
  iconColor,
  borderColor,
  placeholder,
  mode,
  keyboardType,
  onChange,
  items,
  value,
  title,
  helper,
  hasHelper,
}) => {
  const renderInput = () => {
    switch (mode) {
      case "text":
        return (
          <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => onChange(text)}
            value={value.toString()}
          />
        );
      case "date":
        return (
          <DatePicker
            onDateChange={(data) => onChange(data)}
            title={title}
            placeholder={placeholder}
            value={value}
          />
        );
      case "picker":
        return (
          <Picker
            onItemChange={(data) => onChange(data)}
            items={items}
            title={title}
            placeholder={placeholder}
            item={value}
          />
        );
      default:
        return (
          <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => onChange(text)}
            value={value.toString()}
          />
        );
    }
  };

  return (
    <HelperWrapper>
      <InputWrapper color={borderColor}>
        <InputIcon color={iconColor}>
          <Icon name={icon} />
        </InputIcon>
        {renderInput()}
      </InputWrapper>
      {hasHelper && <Helper>{helper}</Helper>}
    </HelperWrapper>
  );
};

export default InputContainer;
