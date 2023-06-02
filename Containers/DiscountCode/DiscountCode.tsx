import React from "react";
import { Text, View } from "../../components/Themed";
import { IDiscountCodeProps } from "./DiscountCode.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";

export const DiscountCode = (props: IDiscountCodeProps) => {
  return (
    <View>
      <HeaderComponent />
      <View
        style={{
          height: "100%",
          position: "relative",
          backgroundColor: secondaryColor,
        }}
      >
        <PointsTitle {...props} />
        <View
          style={{
            height: "100%",
            position: "relative",
            backgroundColor: secondaryColor,
          }}
        >
          <ItemsContainer>
            <SimpleTitle title="Elije tu cupón" />
          </ItemsContainer>
        </View>
      </View>
    </View>
  );
};
