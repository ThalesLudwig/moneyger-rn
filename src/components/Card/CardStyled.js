import styled from "styled-components/native";

export const CardWrapper = styled.View`
  border-radius: 10px;
  background-color: ${({ color, theme }) => color || theme.PRIMARY };
  /* height: 60px; */
  padding: 30px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.CARD};
  font-size: 16px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.CARD};
  font-size: 42px;
  font-weight: bold;
`;
