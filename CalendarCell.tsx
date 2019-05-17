import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from './styles';

interface Props {
  row: number,
  col: number,
  offset: number,
  day: number,
  month: number,
  lastDayOfMonth: number,
  highlightedDayIndex: number,
  onPress: any
}

const CalendarCell: React.FunctionComponent<Props> = memo((props) => {
  const day = props.row*7 + props.col - props.offset;
  const validDay = day > 0 && day <= props.lastDayOfMonth;

  let text;
  if (validDay) {
    text = day.toString();
  }
  else {
    text = "";
  }

  let innerStyle, outerStyle;
  if (props.highlightedDayIndex === day) {
    innerStyle = styles.highlighted;
  }
  else {
    innerStyle = styles.unhighlighted;
  }
  if (day > props.lastDayOfMonth) {
    outerStyle = styles.empty;
  }
  else {
    outerStyle = styles.cell;
  }

  let textStyle;
  if (props.highlightedDayIndex === day) {
    textStyle = [styles.text, styles.textHighlighted];
  }
  else if (props.day === day) {
    textStyle = [styles.text, styles.textCurrentDay];
  }
  else if (props.col === 0 || props.col === 6) {
    textStyle = [styles.text, styles.textWeekend];
  }
  else {
    textStyle = styles.text;
  }

  if (validDay) {
    return (
      <View style={outerStyle}>
        <TouchableOpacity style={innerStyle} onPress={() => props.onPress(day, props.col, props.month)}>
          <Text style={textStyle}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  else {
    return (
      <View style={outerStyle}>
        <Text style={textStyle}>
          {text}
        </Text>
      </View>
    );
  }
});

export default CalendarCell;