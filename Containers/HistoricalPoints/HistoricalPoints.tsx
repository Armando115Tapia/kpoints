import React from "react";
import { Text, View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { primaryColor } from "../../constants/Colors";

const HistoricalPoints = () => {
  return (
    <View>
      <HeaderComponent />
      <View
        style={{
          height: "100%",
          position: "relative",
          backgroundColor: primaryColor,
        }}
      >
        <ItemsContainer>
          <Text>Hola mundo</Text>
          <Text>Hola mundo</Text>
        </ItemsContainer>
      </View>
    </View>
  );
};

export default HistoricalPoints;
