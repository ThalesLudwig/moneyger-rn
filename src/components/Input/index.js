import React from "react";
import {
  Input,
  InputWrapper,
  InputIcon,
  Icon,
  Picker,
  DatePicker,
} from "./InputStyled";

const InputContainer = ({
  icon,
  placeholder,
  mode,
  keyboardType,
  onChange,
  items,
  value,
  title,
}) => {
  const renderInput = () => {
    switch (mode) {
      case "text":
        return (
          <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => onChange(text)}
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
          />
        );
    }
  };

  return (
    <InputWrapper>
      <InputIcon>
        <Icon name={icon} />
      </InputIcon>
      {renderInput()}
    </InputWrapper>
  );
};

export default InputContainer;
