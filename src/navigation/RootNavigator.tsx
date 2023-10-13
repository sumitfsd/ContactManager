import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack";
import { navigationRef } from "./actions";
import { store } from "../store";

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack />
      </Provider>
    </NavigationContainer>
  );
};

export default RootNavigator;
