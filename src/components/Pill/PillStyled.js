import styled from "styled-components/native";
import COLORS from "../../constants/colors";

export const PillWrapper = styled.View`
  border-radius: 10px;
  align-items: center;
  background-color: ${({ active, theme, activeColor }) => (active ? activeColor || theme.PRIMARY : theme.DISABLED)};
  justify-content: center;
  padding: 7px 15px;
  margin: 10px 10px 0px 0px;
`;

export const Title = styled.Text`
  color: ${({ theme, active }) => (!active ? theme.TEXT : COLORS.WHITE)};
  font-size: 16px;
`;
