import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.TEXT};
  width: 20px;
`;

export const MonthWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Month = styled.Text`
  font-size: 22px;
  margin: 0px 15px;
  color: ${({ theme }) => theme.TEXT};
`;

export const Year = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;
