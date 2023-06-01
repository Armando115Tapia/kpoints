import React, { useEffect } from "react";
import { Link, Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: "#2e78b7",
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function NotFoundScreen({ segment }: { segment: string }) {
  console.log("segment", segment);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 10); // TOOD: remove this timeout
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen does not exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen! </Text>
        </Link>
      </View>
    </>
  );
}
