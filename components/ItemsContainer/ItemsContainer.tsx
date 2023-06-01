import React from "react";
import { Text, View } from "../Themed";

//create a funtional component that reciebe childrens as props

export const ItemsContainer = ({ children }: { children: React.ReactNode }) => {
  return <View>{children}</View>;
};
