import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "../../Navigator";
import ThemeManager from "../../components/ThemeManager";
import IntroSlider from "../../components/IntroSlider";
import { connect } from "react-redux";

const Main = ({ instructions }) => {
  const renderContent = () => {
    if (instructions.value) {
      return <IntroSlider />;
    } else {
      return (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      );
    }
  };

  return <ThemeManager>{renderContent()}</ThemeManager>;
};

const mapStateToProps = (state) => {
  return { instructions: state.instructions };
};

export default connect(mapStateToProps)(Main);
