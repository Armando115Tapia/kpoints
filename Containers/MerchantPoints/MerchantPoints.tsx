import React from "react";
import { Text, View } from "../../components/Themed";
import { IMerchantPointsProps } from "./MerchantPoints.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";

export const MerchantPoints = (props: IMerchantPointsProps) => {
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
            <SimpleTitle title="Selecciona tu modalidad" />
          </ItemsContainer>
        </View>
      </View>
    </View>
  );
};
