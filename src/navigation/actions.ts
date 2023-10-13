import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
  NavigationAction,
} from "@react-navigation/native";
import React from "react";

export const navigationRef = createNavigationContainerRef();
export const routeNameRef = React.createRef();
export const rightDrawerRef = React.createRef();

const dispatch = (action: NavigationAction) => {
  if (navigationRef && navigationRef.isReady()) {
    navigationRef.dispatch(action);
  }
};

const navigate = (routeName: string, params: object) => {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.navigate(routeName, params);
  }
};

const push = (routeName: string, params: object = {}) => {
  dispatch(StackActions.push(routeName, params));
};

const canGoBack = () => {
  return navigationRef && navigationRef.isReady() && navigationRef.canGoBack();
};

const popToTop = () => {
  if (canGoBack()) {
    dispatch(StackActions.popToTop());
  }
};

const pop = () => {
  if (canGoBack()) {
    dispatch(StackActions.pop());
  }
};

const refresh = (params: object) => {
  if (navigationRef && navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.setParams(params));
  }
};

const currentRouteName = () => {
  return routeNameRef.current;
};

const actions = {
  navigate,
  push,
  popToTop,
  pop,
  dispatch,
  refresh,
  currentRouteName,
};

export default actions;
