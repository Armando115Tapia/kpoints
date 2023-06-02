import React from "react";
import { View, Text } from "../../Themed";
import { IMainTitleProps } from "./MainTitle.interfaces";
import { MainTitleStyles } from "./MainTitle.styles";

export const MainTitle = ({ title, subtitle, divider }: IMainTitleProps) => {
  return (
    <View style={MainTitleStyles.container}>
      <Text style={MainTitleStyles.title}>{title}</Text>
      <Text>{subtitle}</Text>
      {divider && (
        <View
          style={{
            backgroundColor: "#B3B3B3",
            width: "70%",
            height: 2,
          }}
        />
      )}
    </View>
  );
};
