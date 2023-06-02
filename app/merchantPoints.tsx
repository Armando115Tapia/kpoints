import React from "react";
import { useLocalSearchParams } from "expo-router";
import { MerchantPoints } from "../Containers/MerchantPoints/MerchantPoints";
import { get } from "lodash";

const merchantPoints = () => {
  const params = useLocalSearchParams();

  return (
    <MerchantPoints
      merchantName={get(params, "merchantName", "no merchantName") as string}
      points={get(params, "points", 9999) as number}
    />
  );
};

export default merchantPoints;
