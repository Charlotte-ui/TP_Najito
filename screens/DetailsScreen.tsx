import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { DetailsScreenProps } from "../navigation/app-stacks";

export default class DetailsScreen extends Component<DetailsScreenProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.route.params.cocktail.name}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: this.props.route.params.cocktail.image }}
        ></Image>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.text}>
          {this.props.route.params.cocktail.instructions}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  image: {
    height: 400,
    width: 400,
  },
  title: {
    fontSize: 22,
    margin: 10,
  },
});
