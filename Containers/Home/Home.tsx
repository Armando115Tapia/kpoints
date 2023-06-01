import React from "react";
import { Text, View } from "../../components/Themed";
import { styles } from "./Home.styles";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Aqui va el header</Text>
      <View>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Hola usuarioDeKushki bienvendio a tu app
        </Text>
      </View>
    </View>
  );
};

export default Home;
