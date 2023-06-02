import React from "react";
import { Text, View } from "../../Themed";
import { SimpleTitleStyles } from "./SimpleTitle.styles";
import { isNil } from "lodash";

export const SimpleTitle = ({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <View style={SimpleTitleStyles.container}>
      <Text style={SimpleTitleStyles.title}>{title}</Text>
      {!isNil(icon) && icon}
    </View>
  );
};
