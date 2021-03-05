import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
`;

export const FormArea = styled.View`
  margin-top: 50px;
  align-self: stretch;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  align-self: stretch;
`;

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
