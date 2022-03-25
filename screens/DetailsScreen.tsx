import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { DetailsScreenProps } from "../navigation/app-stacks";

export default class DetailsScreen extends Component<DetailsScreenProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.cocktail.image }}
        ></Image>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.text}>{this.props.cocktail.instructions}</Text>
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
    fontSize: 16,
  },
  image: {
    height: 500,
    width: 500,
  },
  title: {
    fontSize: 22,
  },
});
