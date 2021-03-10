import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { Container, Month, Year, MonthWrapper } from "./CalendarStyled";

const setNext = (now, setNow, onNext) => {
  const newDate = moment(now).add(1, "M");
  setNow(newDate);
  onNext(newDate);
};

const setPrevious = (now, setNow, onPrevious) => {
  const newDate = moment(now).subtract(1, "M");
  setNow(newDate);
  onPrevious(newDate);
};

const Calendar = ({ onNext, onPrevious }) => {
  const [now, setNow] = useState(moment());

  return (
    <Container>
      <Year>{now.format("YYYY")}</Year>
      <MonthWrapper>
        <TouchableOpacity onPress={() => setPrevious(now, setNow, onPrevious)}>
          <Ionicons name="chevron-back" size={22} />
        </TouchableOpacity>
        <Month>{now.format("MMM").toUpperCase()}</Month>
        <TouchableOpacity onPress={() => setNext(now, setNow, onNext)}>
          <Ionicons name="chevron-forward" size={22} />
        </TouchableOpacity>
      </MonthWrapper>
    </Container>
  );
};

export default Calendar;
