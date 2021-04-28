import styled from "styled-components/native";
import pencilGif from "../../assets/pencil.gif";
import searchGif from "../../assets/search.gif";

export const Main = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
  padding: 0px 25px 0px 25px;
  align-items: center;
`;

export const ScrollWrapper = styled.ScrollView.attrs({
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

export const NoResults = styled.Image.attrs({
  source: searchGif,
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

export const Filters = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin: 15px 0px;
  width: 100%;
  flex-wrap: wrap;
`;