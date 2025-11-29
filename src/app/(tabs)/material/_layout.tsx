import React from "react";
import { Stack } from "expo-router";

export default function MaterialLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" options={{ presentation: "modal" }} />
      <Stack.Screen name="add" options={{ presentation: "modal" }} />
    </Stack>
  );
}
