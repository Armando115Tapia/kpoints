import { IMainButtonProps } from "../MainButton/MainButton.interfaces";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../../Themed";
import React from "react";
import { styles } from "./secondaryButton.styles";

export const SecondaryButton = ({ title, onPress }: IMainButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
