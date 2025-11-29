import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

interface Props {
  onPress?: () => void;
}

export default function BackButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress ?? (() => router.back())}
      style={styles.touch}
    >
      <View className="bg-black flex items-center justify-center rounded-lg p-2">
        <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: { padding: 4 },
  container: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
