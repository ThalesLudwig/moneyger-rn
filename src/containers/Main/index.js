import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "../../Navigator";
import ThemeManager from "../../components/ThemeManager";
import IntroSlider from "../../components/IntroSlider";
import { useSelector } from "react-redux";

const Main = () => {
  const { value: instructions } = useSelector((state) => state.instructions);

  return (
    <ThemeManager>
      {instructions ? (
        <IntroSlider />
      ) : (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      )}
    </ThemeManager>
  );
};

export default Main;
