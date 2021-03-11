import styled from "styled-components/native";
import COLORS from "../../constants/colors";

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const Title = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
`;

export const Text = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 22px;
  text-align: center;
`;

export const Image = styled.Image.attrs(({ source }) => ({
  source,
}))`
  width: 150px;
  height: 150px;
`;
