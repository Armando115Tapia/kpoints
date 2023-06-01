import { StyleSheet } from "react-native";
import { primaryColor } from "../../../constants/Colors";

export const MainTitleStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    // implement a shadow
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 20,
  },
});
