import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";
import COLORS from "../../constants/colors";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  background-color: ${COLORS.LIGHT};
`;

export const FormArea = styled.View`
  align-self: stretch;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  align-self: stretch;
`;

export const Container = styled.ScrollView`
  padding: 20px;
`;

