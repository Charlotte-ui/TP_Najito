import React, { Component } from "react";
import { Text, View, FlatList, TextInput, StyleSheet } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import CocktailComponent from "../components/CocktailComponent";

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
        this.setState({ cocktails });
      });
  }

  test() {
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
    const { navigation } = this.props;

    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.updateInput(text)}
          placeholder={"Enter a cocktail name"}
        />
        {this.test()}
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
