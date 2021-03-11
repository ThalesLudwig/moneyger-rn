import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  align-self: stretch;
  padding-top: 15px;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.TEXT};
`;

export const MonthWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-self: stretch;
  align-items: center;
  padding-top: 10px;
`;

export const Month = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.TEXT};
`;

export const Year = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;
