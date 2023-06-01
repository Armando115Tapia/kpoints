import { StyleSheet } from "react-native";

export const MerchantPointsItemStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "rgb(97,173,210)",
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: "#E4CCFF",
  },
});
