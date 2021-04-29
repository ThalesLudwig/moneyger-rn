import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const Touchable = ({ onPress = () => {}, children }) => {
  switch (Platform.OS) {
    // case "android":
    //   return (
    //     <TouchableNativeFeedback onPress={onPress}>
    //       {children}
    //     </TouchableNativeFeedback>
    //   );
    case "ios":
      return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
    default:
      return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
};

export default Touchable;
