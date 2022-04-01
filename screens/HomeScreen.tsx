import React, { Component } from "react";
import { Text, View, FlatList, TextInput, StyleSheet } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import CocktailComponent from "../components/CocktailComponent";
import Recherche from "../components/Recherche";




export default class HomeScreen extends Component<HomeScreenProps,{}>{

  
  render() {
    return (
      <Recherche
      //recherche={(text) => this.updateInput(text)} // la fct fleché conserve le contexte d'execution
     // recherche={this.updateInput.bind(this)}
    // recherche={this.updateInput.call(this)}
      recherche={(text) => cocktaildbapiService.searchCocktailsByName(text)}
      placeholder="Enter a cocktail name"
      navigation={this.props.navigation}
      />
    );
  }
}
