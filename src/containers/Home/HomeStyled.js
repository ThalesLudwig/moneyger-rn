import styled from "styled-components/native";
import COLORS from "../../constants/colors";
import SafeDeviceView from "../../components/SafeDeviceView";

export const Main = styled(SafeDeviceView())`
  flex: 1;
  background-color: ${COLORS.LIGHT};
  padding: 0px;
`;

export const BillsWrapper = styled.ScrollView`
  margin-top: 10px;
`;
