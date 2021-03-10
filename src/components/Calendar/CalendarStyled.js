import styled from "styled-components/native";
import COLORS from "../../constants/colors";

export const Container = styled.View`
  align-items: center;
  align-self: stretch;
  padding-top: 15px;
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
`;

export const Year = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
