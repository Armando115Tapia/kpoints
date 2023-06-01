import React from "react";
import { Text, View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";

const HistoricalPoints = () => {
  return (
    <View>
      <HeaderComponent></HeaderComponent>
      <View
        style={{
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <ItemsContainer>
          <Text>Hola mundo</Text>
        </ItemsContainer>
      </View>
    </View>
  );
};

export default HistoricalPoints;
