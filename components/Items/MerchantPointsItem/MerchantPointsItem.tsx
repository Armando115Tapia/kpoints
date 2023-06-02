import React from "react";
import { View, Text } from "../../Themed";
import { IMerchantPointsItemProps } from "./MerchantPointsItem.interfaces";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { MerchantsLogoPath } from "../../../constants/MerchantsNames";
import { MerchantPointsItemStyles } from "./MerchantPointsItem.styles";
import { MainButton } from "../../Buttons/MainButton/MainButton";

export const MerchantPointsItem = ({
  merchantName,
  points,
}: IMerchantPointsItemProps) => {
  const router = useRouter();

  return (
    <View style={MerchantPointsItemStyles.container}>
      <View style={MerchantPointsItemStyles.imageContainer}>
        <Image
          source={MerchantsLogoPath[merchantName]}
          style={{ width: 75, height: 75 }}
          resizeMode={"contain"}
        />
        <Text>Tienes {points} puntos!</Text>
      </View>
      <View style={MerchantPointsItemStyles.buttonContainer}>
        <MainButton
          title="Canjear puntos"
          onPress={() =>
            router.push({
              pathname: "/merchantPoints",
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
