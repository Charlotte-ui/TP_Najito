import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { SettingsScreenProps } from "../navigation/app-stacks";

export default class SettingsScreen extends Component<SettingsScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Cocktails"
          onPress={() => navigation.navigate("Cocktails")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
}
