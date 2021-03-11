import styled from "styled-components/native";
import SafeArea from "../../components/SafeDeviceView";
import moneyGif from "../../assets/money.gif";
import checkGif from "../../assets/checkmark.gif";

export const SafeContainer = styled(SafeArea())`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
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
  font-size: 18px;
  font-weight: bold;
`;

export const Money = styled.Image.attrs({
  source: moneyGif,
})`
  width: 120px;
  height: 120px;
`;

export const Checkmark = styled.Image.attrs({
  source: checkGif,
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
