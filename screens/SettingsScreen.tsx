import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { SettingsScreenProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import Recherche from "../components/Recherche";

export default class SettingsScreen extends Component<SettingsScreenProps, {}> {



  render() {

    return (
      <Recherche
      recherche={(text) => cocktaildbapiService.searchCocktailsByIngredient(text)}
      placeholder="Search by ingredients"
      navigation={this.props.navigation}
      />
    );
  }
}
