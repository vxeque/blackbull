import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notificaciones",
          tabBarIcon: () => (
            <Entypo name="notification" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen name="basket" />

      <Tabs.Screen name="deliveryData" />
    </Tabs>
  );
}
