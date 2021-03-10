import styled from "styled-components/native";
import COLORS from "../../constants/colors";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.LIGHT};
`;

export const OptionText = styled.Text`
  font-size: 18px;
`;

export const Row = styled.TouchableOpacity`
  background-color: ${COLORS.WHITE};
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.GREY};
`;
