import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Button
      onPress={() => navigation.navigate('ComponentsScreen')}
      title="Go to demo components" />
      <Text style={styles.title}>Touchable</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ListsScreen')}>
        <Text>Go to Lists</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  title: {
    margin: 50,
    padding: 20,
    borderWidth: 10,
    borderColor: "#000",
    borderRadius: 6,
    backgroundColor: "#fff000",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
