import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

// Proportions that take up the height of the entire window
export const window_height = {
  // Header is half the size of a table row
  header: 1/14,
  // Table is 6 rows by 7 cols, each cell should be square
  table: 12/14,
  // Make empty space take up the rest of the screen
  space: ((height - 50)/width) - 13/14,
};

export const theme = {
  white: "#FFFFFF",
  black: "#1F1F2F",

  light: "#EFEFF3",
  medium: "#9F9FAF",
  dark: "#3F3F4F",

  red: "#EF3F3F",
};

const styles = StyleSheet.create({
  navigationHeader: {
  },
  container: {
    flex: 1,
    backgroundColor: theme.white,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    flex: window_height.space/2,
  },
  header: {
    flex: window_height.header,
    flexDirection: "row",
    alignItems: "center",
  },
  table: {
    flex: window_height.table,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  cell: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    borderTopColor: theme.light,
    borderTopWidth: 1,
  },
  unhighlighted: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  highlighted: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 1000,
    backgroundColor: theme.dark,
    margin: 8,
  },
  empty: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    flex: 1,
  },
  textSmall: {
    textAlign: "center",
    fontSize: 12,
    flex: 1,
  },
  textWeekend: {
    color: theme.medium,
  },
  textCurrentDay: {
    color: theme.red,
    fontWeight: 'bold',
  },
  textHighlighted: {
    color: theme.light,
  },
});

export default styles;