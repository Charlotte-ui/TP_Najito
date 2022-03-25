import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside settings tab
const SettingsStack = createStackNavigator<RootStackParamList>();
export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
}
