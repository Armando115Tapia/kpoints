import React from "react";
import { Text, View } from "../Themed";
import { styles } from "./GiftComponent.styles";
import { isEmpty, isNil } from "lodash";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { SecondaryButton } from "../Buttons/secondaryButton/SecondaryButton";

export const GiftComponent = ({
  srcImage,
  btnInfo,
  title,
}: {
  srcImage?: NodeRequire;
  btnInfo?: { btnText: string; pathname: string };
  title?: string;
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={
          isNil(srcImage)
            ? require("../../assets/images/maleAvatar.png")
            : srcImage
        }
        style={styles.image}
        resizeMode={"contain"}
      />
      {!isEmpty(title) && <Text style={styles.title}>{title}</Text>}
      {!isEmpty(btnInfo) && (
        <SecondaryButton
          title={`${btnInfo.btnText}`}
          onPress={() =>
            router.push({
              pathname: btnInfo.pathname,
            })
          }
        />
      )}
    </View>
  );
};
