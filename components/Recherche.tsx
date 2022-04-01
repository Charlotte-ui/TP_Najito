import React, { Component } from "react";
import { Text, View, FlatList, TextInput, StyleSheet } from "react-native";
import { RechercheProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import CocktailComponent from "../components/CocktailComponent";



export default class Recherche extends Component<
  RechercheProps,
  {}
> {
 
  affichage() {
    if (this.props.cocktails.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Nothing to drink yet !</Text>
        </View>
      );
    } else {
      return (
        <FlatList<Cocktail>
          style={styles.cocktails}
          data={this.props.cocktails}
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
          onChangeText={(text) => this.props.recherche(text)}
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
