import React from "react";
import { View } from "../Themed";
import { ScrollView, StyleSheet } from "react-native";
import { isNil } from "lodash";

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    flex: 0.6,
    margin: 15,
    overflow: "hidden",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export const ItemsContainer = ({
  color,
  children,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isNil(color) ? "white" : color,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
    </View>
  );
};
