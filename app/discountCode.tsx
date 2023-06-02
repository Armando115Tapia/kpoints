import React from "react";
import { useLocalSearchParams } from "expo-router";
import { get } from "lodash";
import { DiscountCode } from "../Containers/DiscountCode/DiscountCode";

const DiscountCodeScreen = () => {
  const params = useLocalSearchParams();

  return (
    <DiscountCode
      merchantName={get(params, "merchantName", "no merchantName") as string}
      points={get(params, "points", 0) as number}
    />
  );
};

export default DiscountCodeScreen;
