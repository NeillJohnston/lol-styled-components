import React, { memo } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { NavigationParams } from "react-navigation";

interface Props {
  navigation: NavigationParams,
}

const DateScreen: React.FunctionComponent<Props> = memo(props => {
  const day = props.navigation.getParam("day", 0);;
  const weekday = props.navigation.getParam("weekday", 0);
  const month = props.navigation.getParam("month", 0);

  const dayStr = day.toString();
  const weekdayStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][weekday];
  const monthStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];

  // highly experimental
  // const url = `https://history.muffinlabs.com/date/${month+1}/${day}`;

  return (
    <View style={styles.container}>
      <Text>
        {weekdayStr}, {monthStr} {dayStr}.
      </Text>
    </View>
  );
});

export default DateScreen;