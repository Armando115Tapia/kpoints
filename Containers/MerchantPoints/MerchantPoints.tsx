import React from "react";
import { Text, View } from "../../components/Themed";
import { IMerchantPointsProps } from "./MerchantPoints.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";
import { RedeemItem } from "../../components/Items/RedeemItem/RedeemItem";
import { MerchantsLogoPath } from "../../constants/MerchantsNames";

export const MerchantPoints = (props: IMerchantPointsProps) => {
  return (
    <View>
      <HeaderComponent srcImage={MerchantsLogoPath[props.merchantName]} />
      <View
        style={{
          backgroundColor: secondaryColor,
          height: "100%",
          position: "relative",
        }}
      >
        <PointsTitle {...props} />
        <View
          style={{
            backgroundColor: secondaryColor,
            height: "100%",
            position: "relative",
          }}
        >
          <ItemsContainer color={"#97BBEC"}>
            <SimpleTitle title="Canjear Puntos" />
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
