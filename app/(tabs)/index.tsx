import React from "react";
import { StyleSheet } from "react-native";
import Home from "../../Containers/Home/Home";
import { Text, View } from "../../components/Themed";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
