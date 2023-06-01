import React from "react";
import { Text, View } from "../../Themed";
import { SimpleTitleStyles } from "./SimpleTitle.styles";

export const SimpleTitle = ({ title }: { title: string }) => {
  return (
    <View style={SimpleTitleStyles.container}>
      <Text style={SimpleTitleStyles.title}>{title}</Text>
    </View>
  );
};
