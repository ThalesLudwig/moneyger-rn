import React from "react";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import { InputWrapper, InputIcon, Icon, DatePicker, DatePickerPlaceholder } from "./DateInputStyled";

const DateInput = ({ borderColor, placeholder, onChange, value, title, hasBorder }) => {
  return (
    <InputWrapper color={borderColor} hasBorder={hasBorder}>
      <InputIcon>
        <Icon name="calendar" />
      </InputIcon>
      <DatePicker
        onDateChange={(data) => onChange(data)}
        title={title}
        placeholder={value}
        iosPickerMode="date"
        doneText="Select date"
        InputComponent={(e) => (
          <TouchableOpacity onPress={() => e.togglePicker()} style={{ flex: 1, justifyContent: "center" }}>
            <DatePickerPlaceholder>
              {!!value ? moment(value, "ddd MMM DD YYYY").format("MM/DD/YYYY") : placeholder}
            </DatePickerPlaceholder>
          </TouchableOpacity>
        )}
      />
    </InputWrapper>
  );
};

export default DateInput;
