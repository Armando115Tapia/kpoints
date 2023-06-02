import { useCallback, useEffect, useState } from "react";
import { Text, View } from "../../components/Themed";
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
import { IconButton } from "../../components/Buttons/IconButton/IconButton";

const Home = () => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [kPoints, setKPoints] = useState(useStore((state) => state.points));

  const isLoading = useStore((state) => state.isLoading);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getKPoints(setKPoints);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (isEmpty(kPoints)) {
      getKPoints(setKPoints);
    }
  }, []);

  return (
    <View style={{ backgroundColor: secondaryColor }}>
      <HeaderComponent></HeaderComponent>
      {isEmpty(kPoints) ? (
        <View
          style={{
            alignItems: "center",
            //  backgroundColor: secondaryColor,
            height: "100%",
            marginVertical: 25,
            position: "relative",
          }}
          lightColor={secondaryColor}
          darkColor="black"
        >
          <ScrollView
            style={{
              backgroundColor: "transparent",
              height: "100%",
              position: "relative",
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Image
              source={MerchantsLogoPath["empty"]}
              style={{ height: 300, width: 300 }}
              resizeMode={"contain"}
            />
            <Text
              style={styles.getStartedText}
              darkColor="white"
              lightColor="black"
            >
              Hola Michael! {"\n"} Aún no estás ganando puntos!{"\n"} ¿Quieres
              empezar a ganar cashback con tus consumos? {"\n"} Más información{" "}
              <TouchableOpacity
                onPress={() => router.push({ pathname: "/moreInfo" })}
              >
                <Text
                  style={{ color: "blue", textDecorationLine: "underline" }}
                >
                  aqui
                </Text>
              </TouchableOpacity>
              .
            </Text>
          </ScrollView>
        </View>
      ) : (
        <ScrollView
          style={{
            backgroundColor: secondaryColor,
            height: "100%",
            position: "relative",
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <MainTitle title="Selecciona el comercio: " subtitle="" divider />

          <ItemsContainer color={"#97BBEC"} wrapperStyle>
            {isLoading && isEmpty(kPoints) && (
              <ActivityIndicator color="grey" size={30} />
            )}
            {kPoints.map((kPoint) => (
              <View
                key={kPoint.merchantName}
                style={{ backgroundColor: "transparent" }}
              >
                <IconButton
                  merchantId={kPoint.merchantId}
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
