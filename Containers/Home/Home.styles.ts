import { StyleSheet } from "react-native";
import { primaryColor } from "../../constants/Colors";

export const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
  },
});
