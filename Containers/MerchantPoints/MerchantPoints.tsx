import React from "react";
import { Text, View } from "../../components/Themed";
import { IMerchantPointsProps } from "./MerchantPoints.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";
import { RedeemItem } from "../../components/Items/RedeemItem/RedeemItem";

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
            <RedeemItem
              buttonTitle="Quiero mi codigo de descuento"
              navigateTo="/discountCode"
              merchantName={props.merchantName}
              points={props.points}
            />
            <RedeemItem
              buttonTitle="Quiero hacer el pago a mi TC"
              navigateTo="/cardCharge"
              merchantName={props.merchantName}
              points={props.points}
            />
          </ItemsContainer>
        </View>
      </View>
    </View>
  );
};
