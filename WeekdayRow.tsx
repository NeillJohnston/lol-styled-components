import React, { memo } from "react";
import { Text, View } from "react-native";

import styles from './styles';

const WeekdayRow: React.FunctionComponent = memo(() => {
	const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	const renderWeekday = (weekday: string) => {
		let style;
		if (weekday === "SUN" || weekday == "SAT") {
			style = [styles.textSmall, styles.textWeekend];
		}
		else {
			style = styles.textSmall;
		}

		return (
			<Text key={weekday} style={style}>
				{weekday.slice(0, 1)}
			</Text>
		);
	}

	return (
		<View style={styles.header}>{weekdays.map(renderWeekday)}</View>
	);
});

export default WeekdayRow;