import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";

export default class HomeScreen extends Component<HomeScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
}
