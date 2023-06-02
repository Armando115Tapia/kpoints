import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(97,173,210)",
  },
  containerList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.5,
    marginBottom: 10,
  },
  colum: {
    flex: 0.5,
    fontWeight: "bold",
    fontSize: 25,
  },
});
