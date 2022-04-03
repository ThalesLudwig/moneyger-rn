import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  align-self: stretch;
`;

export const Container = styled.ScrollView`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
  margin: 10px 0;
`;

export const Padding = styled.View`
  margin-bottom: 10px;
`;

export const PillsWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;
