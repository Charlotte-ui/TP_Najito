import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { RouteProp } from "@react-navigation/core";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Cocktail from "../services/cocktail.model";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Cocktails: undefined;
  Details: { cocktail: Cocktail };
  Ingredients: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cocktails" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside settings tab
const SettingsStack = createStackNavigator<RootStackParamList>();
export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Ingredients" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface RechercheProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  recherche;
  placeholder: string;
}

export interface DetailsScreenProps {
  cocktail: Cocktail;
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  route: RouteProp<RootStackParamList, "Details">;
}


export interface CocktailComponentProps {
  cocktail: Cocktail;
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}
