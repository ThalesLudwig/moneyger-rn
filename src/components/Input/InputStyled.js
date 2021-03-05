import styled from "styled-components/native";
import COLORS from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Picker as RNPicker,
  DatePicker as RNDatePicker,
} from "react-native-woodpicker";

export const InputWrapper = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  border-color: ${COLORS.PRIMARY};
  border-width: 3px;
  border-radius: 40px;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding: 10px;
  height: 60px;
  font-size: 16px;
  flex: 1;
`;

export const InputIcon = styled.View`
  background-color: ${COLORS.PRIMARY};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${COLORS.WHITE};
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${COLORS.WHITE};
  font-size: 30px;
`;

export const Picker = styled(RNPicker)`
  margin-left: 10px;
`;

export const DatePicker = styled(RNDatePicker)`
  margin-left: 10px;
`;
