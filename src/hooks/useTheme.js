import THEME from "../constants/theme";
import { useSelector } from "react-redux";

export function useTheme() {
  const { value: currentTheme } = useSelector((state) => state.theme);
  return currentTheme === 1 ? THEME.LIGHT : THEME.DARK;
}
