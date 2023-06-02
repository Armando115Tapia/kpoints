import React from "react";
import { View } from "../Themed";
import { ScrollView, StyleSheet } from "react-native";
import { isNil, get } from "lodash";

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
