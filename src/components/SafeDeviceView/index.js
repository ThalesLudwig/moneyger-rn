import { SafeAreaView as ExpoSafeArea } from "react-native-safe-area-context";
import { SafeAreaView as NativeSafeArea, Platform } from "react-native";

const SafeDeviceView = () => {
  switch (Platform.OS) {
    case "android":
      return ExpoSafeArea;
    case "ios":
      return NativeSafeArea;
    default:
      return NativeSafeArea;
  }
};

export default SafeDeviceView;
