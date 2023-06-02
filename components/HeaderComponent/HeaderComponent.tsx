import React from "react";
import { styles } from "../../Containers/Home/Home.styles";
import { Image } from "react-native";
import { Text, View } from "../Themed";
import { isNil } from "lodash";

export const HeaderComponent = ({ srcImage }: { srcImage?: NodeRequire }) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          isNil(srcImage)
            ? require("../../assets/images/maleAvatar.png")
            : srcImage
        }
        style={{ height: 100, width: 100 }}
        resizeMode={"contain"}
      />
      {isNil(srcImage) && (
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Nombre de usuario
        </Text>
      )}
    </View>
  );
};
export default HeaderComponent;
