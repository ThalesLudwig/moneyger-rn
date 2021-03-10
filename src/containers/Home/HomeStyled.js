import styled from "styled-components/native";
import COLORS from "../../constants/colors";
import SafeDeviceView from "../../components/SafeDeviceView";
import pencilGif from "../../assets/pencil.gif";

export const Main = styled(SafeDeviceView())`
  flex: 1;
  background-color: ${COLORS.LIGHT};
  padding: 0px;
`;

export const BillsWrapper = styled.ScrollView`
  margin-top: 10px;
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
  color: ${COLORS.DARK};
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;