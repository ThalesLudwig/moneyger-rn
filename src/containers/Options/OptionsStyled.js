import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const SwitchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0 24px;
`;
