import React from "react";
import { Text, View } from "../../Themed";
import { IMerchantPointsItemProps } from "./MerchantPointsItem.interfaces";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { MerchantsLogoPath } from "../../../constants/MerchantsNames";
import { MerchantPointsItemStyles } from "./MerchantPointsItem.styles";
import { MainButton } from "../../Buttons/MainButton/MainButton";
import { useStore } from "../../../store/bookStore";

export const MerchantPointsItem = ({
  merchantId,
  merchantName,
  points,
}: IMerchantPointsItemProps) => {
  const router = useRouter();
  const setCurrentMerchant = useStore((state) => state.setCurrentMerchant);

  return (
    <View style={MerchantPointsItemStyles.container}>
      <View style={MerchantPointsItemStyles.imageContainer}>
        <Image
          source={MerchantsLogoPath[merchantName]}
          style={{ height: 75, width: 75 }}
          resizeMode={"contain"}
        />
        <Text>Tienes {points} puntos!</Text>
      </View>
      <View style={MerchantPointsItemStyles.buttonContainer}>
        <MainButton
          title="Canjear puntos"
          onPress={() => {
            router.push({
              params: {
                merchantName,
                points,
              },
              pathname: "/home",
            });
            setCurrentMerchant({ merchantId, merchantName, points });
          }}
        />
      </View>
    </View>
  );
};
