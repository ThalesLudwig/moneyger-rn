import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const FormArea = styled.View`
  align-self: stretch;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  align-self: stretch;
`;

export const Container = styled.ScrollView`
  padding: 20px;
`;

