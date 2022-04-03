import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { DatePicker as RNDatePicker } from "react-native-woodpicker";

export const InputWrapper = styled.View`
  flex-direction: row;
  border-color: ${({ color, theme }) => (color ? color : theme.DISABLED)};
  border-width: 1px;
  border-radius: 10px;
  padding: 4px 0;
`;

export const InputIcon = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.TEXT};
  font-size: 24px;
`;

export const DatePickerPlaceholder = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  padding-left: 10px;
`;

export const DatePicker = styled(RNDatePicker).attrs(({ theme }) => ({
  placeholderStyle: {
    color: theme.TEXT,
  },
  style: {
    color: theme.TEXT,
  },
}))`
  margin-left: 10px;
`;
