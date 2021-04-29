import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";
import moneyGif from "../../assets/money.gif";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
  align-items: center;
`;

export const FormArea = styled.View`
  margin: 50px 0px;
  max-width: 300px;
`;

export const ButtonArea = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 20px;
`;

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Money = styled.Image.attrs({
  source: moneyGif,
})`
  width: 120px;
  height: 120px;
`;

export const MoneyWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MoneyText = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
`;


