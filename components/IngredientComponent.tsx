import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IngredientProps } from "../navigation/app-stacks";

export default class IngredientComponent extends Component<IngredientProps,{}>{
  render() {
    return (

      <View style={styles.container}>
           <Text style={styles.text} >
              {this.props.ingredient}
            </Text>
            <Text style={styles.text} >
              {this.props.measure}
            </Text>
        
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
