import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";

export const ButtonWrapper = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  border-color: ${({ disabled, theme }) => (!disabled ? theme.PRIMARY : theme.DISABLED)};
  border-width: 3px;
  border-radius: 40px;
  align-items: center;
  background-color: ${({ disabled, theme }) =>
    !disabled ? theme.PRIMARY : theme.DISABLED};
  height: 60px;
  justify-content: center;
  padding: 0px 20px;
  align-self: ${({ stretch }) => (stretch ? "auto" : "center")};
`;

export const ButtonIcon = styled.View`
  background-color: ${({ theme }) => theme.PRIMARY};
`;

export const Icon = styled(MaterialCommunityIcons).attrs`
  color: ${({ theme }) => theme.TEXT};
  font-size: 22px;
`;

export const Title = styled.Text`
  color: ${({ theme, disabled }) => disabled ? theme.TEXT : COLORS.WHITE};
  font-size: 16px;
`;
