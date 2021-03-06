import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CocktailComponentProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";

export default class CocktailComponent extends Component<
CocktailComponentProps,
  {}
> {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.props.navigation.navigate("Details", {
              cocktail: this.props.cocktail,
            });
          }}
        >
          <Image
            style={styles.image}
            source={{ uri: this.props.cocktail.thumbnail }}
          />
          <Text style={styles.text}>{this.props.cocktail.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    marginLeft: 10,
  },
  image: { height: 100, width: 100 },
});
