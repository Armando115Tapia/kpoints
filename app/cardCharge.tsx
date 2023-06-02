import React from "react";
import { CardCharge } from "../Containers/CardCharge/CardCharge";
import { useLocalSearchParams } from "expo-router";
import { get } from "lodash";

const CardChargeScreen = () => {
  const params = useLocalSearchParams();

  return (
    <CardCharge
      merchantName={get(params, "merchantName", "") as string}
      points={get(params, "points", 0) as number}
    />
  );
};

export default CardChargeScreen;
