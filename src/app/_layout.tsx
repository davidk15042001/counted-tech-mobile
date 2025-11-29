import "../global.css";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 bg-[#273444]">
      <StatusBar translucent={false} style="dark" backgroundColor="#273444" />
      <Slot />
    </View>
  );
}
