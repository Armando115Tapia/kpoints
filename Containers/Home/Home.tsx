import { useCallback, useEffect, useState } from "react";
import { View, Text } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { MainTitle } from "../../components/Titles/MainTitle/MainTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { secondaryColor } from "../../constants/Colors";
import { MerchantPointsItem } from "../../components/Items/MerchantPointsItem/MerchantPointsItem";
import { MerchantsNames } from "../../constants/MerchantsNames";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { getKPoints } from "../../store/ActionCreators";
import { useStore } from "../../store/bookStore";
import { isEmpty } from "lodash";

const Home = () => {
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
    <View>
      <HeaderComponent></HeaderComponent>
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

        <ItemsContainer>
          {isLoading && isEmpty(kPoints) && (
            <ActivityIndicator color="grey" size={30} />
          )}
          {kPoints.map((kPoint) => (
            <View key={kPoint.merchantName}>
              <MerchantPointsItem
                merchantName={kPoint.merchantName}
                points={kPoint.points}
              />
            </View>
          ))}
        </ItemsContainer>
      </ScrollView>
    </View>
  );
};

export default Home;
