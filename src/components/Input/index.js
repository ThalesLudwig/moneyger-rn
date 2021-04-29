import React from "react";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import {
  Input,
  InputWrapper,
  InputIcon,
  Icon,
  Picker,
  DatePicker,
  Helper,
  HelperWrapper,
  DatePickerPlaceholder,
  Label,
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
  hasBorder,
  fontWeight,
  fontSize,
  label,
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
            fontWeight={fontWeight}
            fontSize={fontSize}
          />
        );
      case "date":
        return (
          <DatePicker
            onDateChange={(data) => onChange(data)}
            title={title}
            placeholder={value}
            locale="pt-BR"
            iosPickerMode="date"
            doneText="Adicionar"
            InputComponent={(e) => (
              <TouchableOpacity
                onPress={() => e.togglePicker()}
                style={{ flex: 1, justifyContent: "center" }}
              >
                <DatePickerPlaceholder>
                  {!!value
                    ? moment(value, "ddd MMM DD YYYY").format("DD/MM/YYYY")
                    : placeholder}
                </DatePickerPlaceholder>
              </TouchableOpacity>
            )}
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
            fontWeight={fontWeight}
            fontSize={fontSize}
          />
        );
    }
  };

  return (
    <HelperWrapper hasHelper={hasHelper}>
      {label && <Label>{label}</Label>}
      <InputWrapper color={borderColor} hasBorder={hasBorder}>
        {icon && (
          <InputIcon color={iconColor}>
            <Icon name={icon} />
          </InputIcon>
        )}
        {renderInput()}
      </InputWrapper>
      {hasHelper && <Helper>{helper}</Helper>}
    </HelperWrapper>
  );
};

export default InputContainer;
