import React from "react";
import { View, Text } from "../../Themed";
import { IPointsTitleProps } from "./PointsTitle.interfaces";
import { PointsTitleStyles } from "./PointsTitle.styles";

export const PointsTitle = ({ merchantName, points }: IPointsTitleProps) => {
  return (
    <View style={PointsTitleStyles.container}>
      <Text style={PointsTitleStyles.title}>Tienes un total de</Text>
      <Text style={PointsTitleStyles.points}>{points}</Text>
      <Text style={PointsTitleStyles.subtitle}>{merchantName} Points</Text>
    </View>
  );
};
