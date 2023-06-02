import React from "react";
import { Text, View } from "../Themed";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { secondaryColor } from "../../constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(112,157,236)",
    borderRadius: 40,
    flex: 0.5,
    justifyContent: "center",
    margin: 15,
    overflow: "hidden",
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    margin: 15,
    textAlign: "center",
  },
});

export const MoreInfoComponent = () => {
  return (
    <View style={{ backgroundColor: secondaryColor }}>
      <HeaderComponent></HeaderComponent>
      <View
        style={{
          alignItems: "center",
          backgroundColor: secondaryColor,
          height: "100%",
          marginVertical: 25,
          position: "relative",
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            ¡Obtén Cash-Back del 1% del consumo total en puntos!
          </Text>
          <Text style={styles.text}>
            Canjea tus puntos por códigos para descuentos en productos o
            servicios en el comercio que hiciste la compra.
          </Text>
          <Text style={styles.text}>
            Canjea tus puntos por códigos para descuentos en productos o
            servicios en el comercio que hiciste la compra. Puedes utilizar tus
            puntos para realizar un pago a tu TC.
          </Text>
          <Text style={styles.text}>
            ¡Obtén bonus por el cumplimiento de objetivos con consumos!
          </Text>
        </View>
      </View>
    </View>
  );
};
