import React, { useState, memo } from "react";
import { View } from "react-native";

import CalendarCell from "./CalendarCell";
import styles from './styles';

interface Props {
  day: number,
  weekday: number,
  month: number,
  year: number,
  navigateToDate: (day: number, weekday: number, month: number) => any,
}

const Calendar: React.FunctionComponent<Props> = memo((props) => {
  // 2 mods needed otherwise offset could go negative
  const offset = (7 + (props.weekday - props.day) % 7) % 7;

  let lastDayOfMonth: number;
  // Leap year checking
  if (props.month === 1 && props.year % 4 === 0 && (props.year % 100 !== 0 || props.year % 400 === 0)) {
    lastDayOfMonth = 29;
  }
  else {
    lastDayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][props.month];
  }

  const [highlightedDayIndex, setHighlightedDayIndex] = useState(-1);

  const renderCell = (row: number, col: number) => {
    return (
      <CalendarCell key={col}
        row={row}
        col={col}
        offset={offset}
        day={props.day}
        month={props.month}
        lastDayOfMonth={lastDayOfMonth}
        highlightedDayIndex={highlightedDayIndex}
        onPress={props.navigateToDate}
      />
    );
  }
  
  const renderRow = (row: number) => {
    return (
      <View key={row} style={styles.row}>
        {[0, 1, 2, 3, 4, 5, 6].map(col => renderCell(row, col))}
      </View>
    );
  }
	
  return (
    <View style={styles.table}>
      {[0, 1, 2, 3, 4, 5].map(row => renderRow(row))}
    </View>
  );
});

export default Calendar;