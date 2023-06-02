import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useNavigation } from "expo-router";
import {
  Image,
  Pressable,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useEffect } from "react";
import { Text } from "../../components/Themed";

import Colors, { primaryColor, styleHeader } from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigator = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <Text style={{ marginLeft: 10 }}>Regresar</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            ...styleHeader,
          },
          headerTitle: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          title: "Inicio",
        }}
      />
      <Tabs.Screen
        name="historicalPoints"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <Text style={{ marginLeft: 10 }}>Regresar</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            ...styleHeader,
          },
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
          title: "Historial",
        }}
      />
      <Tabs.Screen
        name="prize"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <Text style={{ marginLeft: 10 }}>Regresar</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            ...styleHeader,
          },
          headerTitle: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
          title: "Premios",
        }}
      />
    </Tabs>
  );
}
