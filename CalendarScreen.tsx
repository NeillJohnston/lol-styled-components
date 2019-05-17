import React, { memo } from "react";
import { View } from "react-native";
import { NavigationParams } from "react-navigation";
import styled from "styled-components/native";

import WeekdayRow from "./WeekdayRow"
import Calendar from "./Calendar"
import styles, { theme, window_height } from "./styles";

interface Props {
  navigation: NavigationParams,
}

const CalendarScreen: React.FunctionComponent<Props> = memo(props => {
  const date = new Date();
  const day = date.getDate();
  const weekday = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const navigateToDate = (day: number, weekday: number, month: number) => {
    props.navigation.navigate("Date", {
      day: day,
      weekday: weekday,
      month: month,
    })
  };
  
  return (
    <View style={styles.container}>
      <Space />
      <WeekdayRow />
      <Calendar day={day} weekday={weekday} month={month} year={year} navigateToDate={navigateToDate} />
      <View style={styles.space} />
    </View>
  );
});

const Space = styled.View`
  background-color: red
`;

export default CalendarScreen;