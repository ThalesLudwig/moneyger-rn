import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";

export const ButtonWrapper = styled.View`
  flex-direction: row;
  border-radius: 40px;
  align-items: center;
  background-color: ${({ disabled, theme, outlined }) => {
    if (disabled) return theme.DISABLED;
    if (outlined) return theme.BACKGROUND;
    return theme.PRIMARY;
  }};
  justify-content: center;
  padding: 15px 50px;
  margin: 0px 10px 0px 0px;

  border-color: ${({ theme }) => theme.DISABLED};
  border-width: ${({ outlined }) => (outlined ? "1px" : "0px")};
`;

export const ButtonIcon = styled.View`
  background-color: ${({ theme }) => theme.PRIMARY};
`;

export const Icon = styled(MaterialCommunityIcons).attrs`
  color: ${({ theme }) => theme.TEXT};
  font-size: 22px;
`;

export const Title = styled.Text`
  color: ${({ disabled, theme, outlined }) => {
    if (disabled) return theme.TEXT;
    if (outlined) return theme.TEXT;
    return COLORS.WHITE;
  }};

  font-size: 16px;
  font-weight: bold;
`;
