import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Screen, Text, Title, Image } from "./IntroSliderStyled";
import lightbulb from "../../assets/lightbulb.gif";
import campfire from "../../assets/campfire.gif";
import customize from "../../assets/customize.gif";
import store from "../../config/store";
import { showInstructions } from "../../config/instructionsSlice";

const slides = [
  {
    key: "1",
    title: "Simple and easy",
    text: "Control what was already paid",
    image: lightbulb,
    backgroundColor: "#65D8B5",
  },
  {
    key: "2",
    title: "Your bills are registered for every month",
    text: "And controlled individually!",
    image: customize,
    backgroundColor: "#E79D5B",
  },
  {
    key: "3",
    title: "Never forget a bill anymore",
    text: "Just relax!",
    image: campfire,
    backgroundColor: "#E1546D",
  },
];

const IntroSlider = () => {
  const render = ({ item }) => {
    return (
      <Screen backgroundColor={item.backgroundColor}>
        <Image source={item.image} />
        <Title>{item.title}</Title>
        <Text>{item.text}</Text>
      </Screen>
    );
  };

  const onClose = () => {
    store.dispatch(showInstructions());
  };

  return <AppIntroSlider nextLabel="Próximo" doneLabel="Entendi" renderItem={render} data={slides} onDone={onClose} />;
};

export default IntroSlider;
