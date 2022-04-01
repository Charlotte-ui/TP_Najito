import React, { Component } from "react";
import { Text, View, FlatList, TextInput, StyleSheet } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import CocktailComponent from "../components/CocktailComponent";
import Recherche from "../components/Recherche";


interface HomeScreenState {
  cocktails: Array<Cocktail>;
}

export default class HomeScreen extends Component<
  HomeScreenProps,
  HomeScreenState
> {

  state: HomeScreenState = {
    cocktails: new Array<Cocktail>(),
  };

  updateInput(newInput: string) {
    cocktaildbapiService
      .searchCocktailsByName(newInput)
      .then((cocktails: Array<Cocktail>) => {
        debugger;
        this.setState({ cocktails });
      });
  }

  render() {
    return (
      <Recherche
      recherche={(text) => this.updateInput(text)} // la fct fleché conserve le contexte d'execution
     // recherche={this.updateInput.bind(this)}
    // recherche={this.updateInput.call(this)}
      placeholder="Enter a cocktail name"
      navigation={this.props.navigation}
      cocktails={this.state.cocktails}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
  input: {
    height: 40,
    padding: 10,
  },
  cocktails: {},
});
