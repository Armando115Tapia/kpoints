import React from "react";
import { Text, View } from "../../Themed";
import { IMerchantPointsProps } from "../../../Containers/MerchantPoints/MerchantPoints.interfaces";
import { Image, TouchableOpacity } from "react-native";
import { MerchantsLogoPath } from "../../../constants/MerchantsNames";
import { useRouter } from "expo-router";
import { useStore } from "../../../store/bookStore";

export const IconButton = ({
  merchantName,
  points,
  merchantId,
}: IMerchantPointsProps & { merchantId: string }) => {
  const router = useRouter();
  const setCurrentMerchant = useStore((state) => state.setCurrentMerchant);

  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/home",
          params: {
            merchantName,
            points,
          },
        });
        setCurrentMerchant({ merchantId, merchantName, points });
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          width: 140,
          margin: 10,

          display: "flex",
        }}
      >
        <Image
          source={MerchantsLogoPath[merchantName]}
          style={{ width: 75, height: 75 }}
          resizeMode={"contain"}
        />
      </View>
    </TouchableOpacity>
  );
};
