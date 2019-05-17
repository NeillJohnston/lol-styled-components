import React, { memo } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import CalendarScreen from "./CalendarScreen";
import DateScreen from "./DateScreen";
import styles from "./styles";

const AppNavigator = createStackNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
    },
    Date: {
      screen: DateScreen,
    }
  },
  {
    initialRouteName: "Calendar",
    defaultNavigationOptions: {
      title: "Calendar",
      headerStyle: styles.navigationHeader,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App: React.FunctionComponent = memo(() => {
  return <AppContainer />;
});

export default App;