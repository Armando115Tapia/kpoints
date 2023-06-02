import React from "react";
import { View } from "../Themed";
import { ScrollView, StyleSheet } from "react-native";
import { isNil, get } from "lodash";

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
  wrapperStyle,
}: {
  children: React.ReactNode;
  color?: string;
  wrapperStyle?: boolean;
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isNil(color) ? "white" : color,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          ...styles.scrollContainer,
          flexWrap: wrapperStyle ? "wrap" : "nowrap",
          flexDirection: wrapperStyle ? "row" : "column",
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
