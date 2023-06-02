import { Text, View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { MainTitle } from "../../components/Titles/MainTitle/MainTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { secondaryColor } from "../../constants/Colors";
import { MerchantPointsItem } from "../../components/Items/MerchantPointsItem/MerchantPointsItem";
import {
  MerchantsLogoPath,
  MerchantsNames,
} from "../../constants/MerchantsNames";
import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Home.styles";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const isEmpty: boolean = true;

  return (
    <View style={{ backgroundColor: secondaryColor }}>
      <HeaderComponent></HeaderComponent>
      {isEmpty ? (
        <View
          style={{
            alignItems: "center",
            backgroundColor: secondaryColor,
            height: "100%",
            marginVertical: 25,
            position: "relative",
          }}
        >
          <Image
            source={MerchantsLogoPath["empty"]}
            style={{ height: 300, width: 300 }}
            resizeMode={"contain"}
          />
          <Text
            style={styles.getStartedText}
            darkColor="#B3B3B3"
            lightColor="rgba(255,255,255,0.8)"
          >
            Hola Michael! {"\n"} Aún no estás ganando puntos!{"\n"} ¿Quieres
            empezar a ganar cashback con tus consumos? {"\n"} Más información{" "}
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/moreInfo" })}
            >
              <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                aqui
              </Text>
            </TouchableOpacity>
            .
          </Text>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: secondaryColor,
            height: "100%",
            position: "relative",
          }}
        >
          <MainTitle title="¡FELICIDADES!" subtitle="" divider />
          <ItemsContainer>
            <MerchantPointsItem
              merchantName={MerchantsNames.macdonalds}
              points={140}
            />
            <MerchantPointsItem
              merchantName={MerchantsNames.rappi}
              points={30}
            />
            <MerchantPointsItem
              merchantName={MerchantsNames.apple}
              points={75}
            />
            <MerchantPointsItem
              merchantName={MerchantsNames.addidas}
              points={80}
            />
          </ItemsContainer>
        </View>
      )}
    </View>
  );
};

export default Home;
