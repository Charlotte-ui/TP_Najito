import React, { Component } from "react";
import { Text, View, Button, TextInput, StyleSheet  } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";


interface HomeScreenState {
  input: string ;
}

export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState > {
  

  state: HomeScreenState = {
    input: "",
  };

  updateInput(newInput : string){
    this.setState({
        input: newInput,
    });
}
  
  render() {
    const { navigation } = this.props;

    

    return (
      <View >
        <TextInput
        style={styles.input}
        onChangeText={text => this.updateInput(text)}
        onSubmitEditing={() => this.props.onSubmittingEdit(this.state.input)}
        placeholder={"Enter a cocktail name"}
      />
      <View style={styles.container}>
        <Text>Nothing to drink yet !</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center", 
    alignItems: "center",
    marginTop: 250
  },
  input: {
    height: 40,
    padding: 10,
  },
});