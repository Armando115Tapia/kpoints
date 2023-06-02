import { useCallback, useEffect, useState } from "react";
import { View, Text } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { MainTitle } from "../../components/Titles/MainTitle/MainTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { secondaryColor } from "../../constants/Colors";
import { MerchantPointsItem } from "../../components/Items/MerchantPointsItem/MerchantPointsItem";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { getKPoints } from "../../store/ActionCreators";
import { useStore } from "../../store/bookStore";
import { isEmpty } from "lodash";
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
  const [refreshing, setRefreshing] = useState(false);
  const kPoints = useStore((state) => state.points);
  const isLoading = useStore((state) => state.isLoading);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getKPoints();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (isEmpty(kPoints)) {
      getKPoints();
    }
  }, []);

  return (
    <View style={{ backgroundColor: secondaryColor }}>
      <HeaderComponent></HeaderComponent>
      {isEmpty(kPoints) ? (
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
        <ScrollView
          style={{
            height: "100%",
            position: "relative",
            backgroundColor: secondaryColor,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <MainTitle title="¡FELICIDADES!" subtitle="" divider />

          <ItemsContainer color={"#97BBEC"}>
            {isLoading && isEmpty(kPoints) && (
              <ActivityIndicator color="grey" size={30} />
            )}
            {kPoints.map((kPoint) => (
              <View
                key={kPoint.merchantName}
                style={{ backgroundColor: "transparent" }}
              >
                <MerchantPointsItem
                  merchantName={kPoint.merchantName}
                  points={kPoint.points}
                />
              </View>
            ))}
          </ItemsContainer>
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
