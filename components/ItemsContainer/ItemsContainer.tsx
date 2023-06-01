import React from "react";
import { View } from "../Themed";
import { ScrollView, StyleSheet } from "react-native";

export const ItemsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 0.6,
    borderRadius: 40,
    overflow: "hidden",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
