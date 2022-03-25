import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CocktailComponentProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";

export default class CocktailComponent extends Component<
  CocktailComponentProps,
  {}
> {
  render() {
    const { cocktail, navigation } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            //      navigation.navigate("Cocktail", {
            //        cocktailId: cocktail.id,
            //      });
          }}
        >
          <Image style={styles.image} source={{ uri: cocktail.thumbnail }} />
          <Text style={styles.text}>{cocktail.name}</Text>
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
