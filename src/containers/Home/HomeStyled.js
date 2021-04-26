import styled from "styled-components/native";
import pencilGif from "../../assets/pencil.gif";

export const Main = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
  padding: 25px 25px 0px 25px;
  align-items: center;
`;

export const BillsWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  width: 100%;
  max-width: 600px;
`;

export const Empty = styled.Image.attrs({
  source: pencilGif,
})`
  width: 120px;
  height: 120px;
`;

export const EmptyWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
