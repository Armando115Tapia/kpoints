import React from "react";
import { Text, View } from "../../components/Themed";
import { IDiscountCodeProps } from "./DiscountCode.interfaces";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { secondaryColor } from "../../constants/Colors";
import { PointsTitle } from "../../components/Titles/PointsTitle/PointsTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";
import { GiftComponent } from "../../components/GifComponent/GiftComponent";

export const DiscountCode = (props: IDiscountCodeProps) => {
  return (
    <View>
      <HeaderComponent />
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
          <ItemsContainer>
            <SimpleTitle title="Elije tu cupón" />
            <GiftComponent
              srcImage={require("../../assets/images/gift.png")}
              btnInfo={{ btnText: "ADIDAS7754KS", pathname: "" }}
              title={"$ 1.500"}
            />
          </ItemsContainer>
        </View>
      </View>
    </View>
  );
};
