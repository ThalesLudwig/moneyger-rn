import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigator from "../../Navigator";
import ThemeManager from "../../components/ThemeManager";
import IntroSlider from "../../components/IntroSlider";
import { useSelector } from "react-redux";

const Main = () => {
  const { value: instructions } = useSelector((state) => state.instructions);
  const nativeTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
      border: "transparent",
    },
  };

  return (
    <ThemeManager>
      {instructions ? (
        <IntroSlider />
      ) : (
        <NavigationContainer theme={nativeTheme}>
          <Navigator />
        </NavigationContainer>
      )}
    </ThemeManager>
  );
};

export default Main;
