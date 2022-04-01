import React, { Component } from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { DetailsScreenProps } from "../navigation/app-stacks";
import IngredientComponent from "../components/IngredientComponent"
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
        <Text style={styles.title}>Ingredients</Text>
        <FlatList
        data={this.props.route.params.cocktail.ingredients}
        renderItem={({ item }) => {
          return (
            <IngredientComponent
            ingredient={item.text}
            measure={item.measure}
            />
          );
        }}

        />
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
