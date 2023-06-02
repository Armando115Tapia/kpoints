import React from "react";
import { View, Text } from "../../Themed";
import { Image } from "react-native";
import { MerchantPointsItemStyles } from "../MerchantPointsItem/MerchantPointsItem.styles";
import { RedeemItemStyles } from "./RedeemItem.styles";
import { MainButton } from "../../Buttons/MainButton/MainButton";
import { useRouter } from "expo-router";
import { IRedeemItemProps } from "./RedeemItem.interfaces";

export const RedeemItem = ({
  buttonTitle,
  navigateTo,
  merchantName,
  points,
}: IRedeemItemProps) => {
  const router = useRouter();

  return (
    <View style={RedeemItemStyles.container}>
      <View style={{ ...MerchantPointsItemStyles.imageContainer, flex: 0.5 }}>
        <Image
          source={require("../../../assets/images/ticket.png")}
          style={{ width: 75, height: 75 }}
          resizeMode={"contain"}
        />
      </View>
      <View style={MerchantPointsItemStyles.buttonContainer}>
        <MainButton
          title={buttonTitle}
          onPress={() =>
            router.push({
              pathname: navigateTo,
              params: {
                merchantName,
                points,
              },
            })
          }
        />
      </View>
    </View>
  );
};
