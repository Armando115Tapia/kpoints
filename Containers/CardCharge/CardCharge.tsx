import React from "react";
import { Text, View } from "../../components/Themed";
import { IDiscountCodeProps } from "../DiscountCode/DiscountCode.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";
import { Image } from "react-native";

export const CardCharge = (props: IDiscountCodeProps) => {
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
            <SimpleTitle
              title="Cashback disponible"
              icon={
                <Image
                  source={require("../../assets/images/cashbacklogo.png")}
                  style={{ width: 40, height: 40, marginHorizontal: 10 }}
                  resizeMode={"contain"}
                />
              }
            />
          </ItemsContainer>
        </View>
      </View>
    </View>
  );
};
