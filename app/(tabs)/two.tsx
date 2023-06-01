import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import HistoricalPoints from "../../Containers/HistoricalPoints/HistoricalPoints";

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

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <HistoricalPoints />
    </View>
  );
}
