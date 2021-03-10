import styled from "styled-components/native";
import COLORS from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ButtonWrapper = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  border-color: ${({ disabled }) => (!disabled ? COLORS.PRIMARY : COLORS.GREY)};
  border-width: 3px;
  border-radius: 40px;
  align-items: center;
  background-color: ${({ disabled }) =>
    !disabled ? COLORS.PRIMARY : COLORS.GREY};
  height: 60px;
  justify-content: center;
  padding: 0px 20px;
  align-self: ${({ stretch }) => (stretch ? "auto" : "center")};
`;

export const ButtonIcon = styled.View`
  background-color: ${COLORS.PRIMARY};
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${COLORS.WHITE};
  font-size: 22px;
`;

export const Title = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
`;
