import React from "react";
import { Text, View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { useStore } from "../../store/bookStore";
import { MerchantsLogoPath } from "../../constants/MerchantsNames";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";

const HistoricalPoints = () => {
  const currentMerchant = useStore((state) => state.currentMerchant);

  return (
    <View>
      <HeaderComponent
        srcImage={MerchantsLogoPath[currentMerchant!.merchantName]}
      />
      <View
        style={{
          height: "100%",
          position: "relative",
          backgroundColor: secondaryColor,
        }}
      >
        <View style={{ backgroundColor: "transparent", marginTop: 10 }}>
          <SimpleTitle title="Historial de puntos" />
        </View>
        <ItemsContainer>
          <Text>Hola mundo</Text>
          <Text>Hola mundo</Text>
        </ItemsContainer>
      </View>
    </View>
  );
};

export default HistoricalPoints;
