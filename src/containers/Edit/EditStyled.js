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
  padding: 10px 30px 0px 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
`;

export const Amount = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT};
  padding-top: 10px;
`;

export const AmountRow = styled.View`
  flex-direction: row;  
  margin-bottom: 10px;
`;

export const DateField = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.DISABLED};
`;

export const Header = styled.View`
  margin: 0px 0px 20px 15px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  margin: 10px 0px;
`;

export const PillsWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
