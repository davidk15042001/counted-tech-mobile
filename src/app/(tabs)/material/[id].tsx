import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MaterialDetailModal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 bg-[#273444] p-4 pt-12">
      <TouchableOpacity onPress={() => router.back()} className="absolute right-4 top-3 bg-black rounded-lg p-2">
        <Ionicons name="close" size={18} color="#FFFFFF" />
      </TouchableOpacity>
      <Text className="text-white text-xl font-bold mb-3">Material {id}</Text>
      <Text className="text-gray-200">Detailed info about Material {id}...</Text>
    </View>
  );
}
