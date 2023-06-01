import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../../Themed";
import { MerchantPointsItemStyles } from "../../MerchantPointsItem/MerchantPointsItem.styles";
import { IMainButtonProps } from "./MainButton.interfaces";

export const MainButton = ({ title, onPress }: IMainButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={MerchantPointsItemStyles.button}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
