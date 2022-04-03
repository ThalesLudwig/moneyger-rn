import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const ButtonArea = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 10px;
`;

export const Container = styled.ScrollView`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
  margin: 25px 0;
`;
