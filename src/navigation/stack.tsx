import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "../components/modules/Contacts/ContactListScreen";
import ContactDetailScreen from "../components/modules/Contacts/ContactDetailScreen";
import { SCREENS } from "./constants";

const Stack = (): JSX.Element => {
  const stackNavigator = createNativeStackNavigator();
  return (
    <stackNavigator.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={SCREENS.CONTACT_LIST_SCREEN}
    >
      <stackNavigator.Screen
        name={SCREENS.CONTACT_LIST_SCREEN}
        component={ContactListScreen}
      />
      <stackNavigator.Screen
        name={SCREENS.CONTACT_DETAIL_SCREEN}
        component={ContactDetailScreen}
      />
    </stackNavigator.Navigator>
  );
};

export default Stack;
