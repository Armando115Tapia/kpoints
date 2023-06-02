export enum MerchantsNames {
  macdonalds = "McDonalds",
  apple = "Apple",
  rappi = "Rappi",
  addidas = "Addidas",
  empty = "empty",
}

export const MerchantsLogoPath: Record<string, any> = {
  [MerchantsNames.macdonalds]: require("../assets/images/merchantLogos/McDonalds.png"),
  [MerchantsNames.apple]: require("../assets/images/merchantLogos/apple.png"),
  [MerchantsNames.rappi]: require("../assets/images/merchantLogos/rappi.png"),
  [MerchantsNames.addidas]: require("../assets/images/merchantLogos/addidas.png"),
  [MerchantsNames.empty]: require("../assets/images/emptyPoints.png"),
};
