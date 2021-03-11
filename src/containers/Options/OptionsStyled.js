import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const OptionText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.TEXT};
`;

export const Row = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.BACKGROUND};
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.DISABLED};
`;
