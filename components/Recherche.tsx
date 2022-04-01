import React, { Component } from "react";
import { Text, View, FlatList, TextInput, StyleSheet } from "react-native";
import { RechercheProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import CocktailComponent from "../components/CocktailComponent";

interface RechercheState {
  cocktails: Array<Cocktail>;
}

export default class Recherche extends Component<RechercheProps, RechercheState >{
  state: RechercheState = {
    cocktails: new Array<Cocktail>(),
  };

  updateInput(newInput: string) {
    this.props.recherche(newInput)
      .then((cocktails: Array<Cocktail>) => {
        this.setState({ cocktails });
      });
  }
 
  affichage() {
    if (this.state.cocktails.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Nothing to drink yet !</Text>
        </View>
      );
    } else {
      return (
        <FlatList<Cocktail>
          style={styles.cocktails}
          data={this.state.cocktails}
          keyExtractor={(cocktail) => cocktail.id.toString()}
          renderItem={({ item }) => {
            return (
              <CocktailComponent
                cocktail={item}
                navigation={this.props.navigation}
              />
            );
          }}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.updateInput(text)}
          placeholder={this.props.placeholder}
        />
        {this.affichage()}
      </View>
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
