import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Picker as RNPicker, DatePicker as RNDatePicker } from "react-native-woodpicker";

export const InputWrapper = styled.View`
  flex-direction: row;
  border-bottom-color: ${({ color, theme }) => (color ? color : theme.DISABLED)};
  border-bottom-width: ${({ hasBorder }) => (hasBorder ? "1px" : "0px")};
`;

export const HelperWrapper = styled.View`
  margin-bottom: ${({ hasHelper }) => (hasHelper ? "10px" : "0px")};
  width: 100%;
  max-width: 500px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.DISABLED,
}))`
  padding: 10px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  color: ${({ theme }) => theme.TEXT};
  width: 100%;
`;

export const InputIcon = styled.View`
  height: 50px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.TEXT};
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
  color: ${({ theme }) => theme.PRIMARY};
  font-weight: bold;
  margin: 5px 0px 0px 20px;
`;

export const DatePickerPlaceholder = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  padding-left: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  font-weight: bold;
`;

export const Required = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;

export const LabelWrapper = styled.View`
  margin-left: 18px;
  flex-direction: row;
`;
