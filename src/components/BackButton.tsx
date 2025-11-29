import React from "react";
import { TouchableOpacity, View } from "react-native";
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
      className="p-1"
    >
      <View className="bg-black flex items-center justify-center rounded-lg p-2 w-9 h-9">
        <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
}
