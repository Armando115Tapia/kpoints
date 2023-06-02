import React from "react";
import { View } from "../Themed";
import { ScrollView, StyleSheet } from "react-native";
import { isNil } from "lodash";

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
