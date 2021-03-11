import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Picker as RNPicker,
  DatePicker as RNDatePicker,
} from "react-native-woodpicker";

export const InputWrapper = styled.View`
  flex-direction: row;
  border-color: ${({ color, theme }) => (color ? color : theme.PRIMARY)};
  border-width: 3px;
  border-radius: 40px;
  align-items: center;
`;

export const HelperWrapper = styled.View`
  margin-bottom: 25px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.DISABLED
}))`
  padding: 10px;
  height: 60px;
  font-size: 16px;
  flex: 1;
  color: ${({ theme }) => theme.TEXT};
`;

export const InputIcon = styled.View`
  background-color: ${({ color, theme }) => (color ? color : theme.PRIMARY)};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.BACKGROUND};
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.ICONS};
  font-size: 30px;
`;

export const Picker = styled(RNPicker).attrs(({ theme }) => ({
  placeholderStyle: {
    color: theme.TEXT,
  },
  style: {
    color: theme.TEXT,
  },
}))`
  margin-left: 10px;
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

export const Helper = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  font-weight: bold;
  margin: 5px 0px 0px 25px;
`;

export const DatePickerPlaceholder = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  padding-left: 10px;
`;
