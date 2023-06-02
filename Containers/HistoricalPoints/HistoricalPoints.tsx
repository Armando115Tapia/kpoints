import React, { useEffect, useState } from "react";
import { Text, View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { useStore } from "../../store/bookStore";
import { MerchantsLogoPath } from "../../constants/MerchantsNames";
import { SimpleTitle } from "../../components/Titles/SimpleTitle/SimpleTitle";
import { styles } from "./HistoricalPoints.styles";
import { IGetKPointHistory } from "../../store/interfaces/storeInterfaces";
import { isEmpty } from "lodash";
import { getKPointsHistory } from "../../store/ActionCreators";
import { IHistoryListProps } from "./HistoricalPointsInterface";
import { ActivityIndicator } from "react-native";

const HistoricalPoints = () => {
  const currentMerchant = useStore((state) => state.currentMerchant);
  const [history, setKPointsHistory] = useState(
    useStore((state) => state.history)
  );
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    if (isEmpty(history.history)) {
      getKPointsHistory(setKPointsHistory);
    }
  }, []);

  return (
    <View>
      <HeaderComponent
        srcImage={MerchantsLogoPath[currentMerchant!.merchantName]}
      />
      <View
        style={{
          backgroundColor: secondaryColor,
          height: "100%",
          position: "relative",
        }}
      >
        <View style={{ backgroundColor: "transparent", marginTop: 10 }}>
          <SimpleTitle title="Historial de puntos:" />
        </View>
        <ItemsContainer>
          {isLoading && isEmpty(history.history) && (
            <ActivityIndicator color="grey" size={30} />
          )}
          <ListItem history={history.history}></ListItem>
        </ItemsContainer>
      </View>
    </View>
  );
};

const ListItem = (props: IHistoryListProps) => {
  return (
    <View style={styles.containerList}>
      {props.history.map((item: IGetKPointHistory, index: number) => (
        <View style={styles.row} key={index}>
          <Text style={styles.colum}>
            $ {item.operator}
            {item.points}
          </Text>
          <Text style={styles.colum}>{item.date}</Text>
        </View>
      ))}
    </View>
  );
};

export default HistoricalPoints;
