import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileView() {
  return (
    <View className="flex-1 bg-[#273444] p-6">
      <View className="flex flex-row items-center justify-between mb-6">
        <BackButton />
        <TouchableOpacity
          className="p-2 rounded-lg bg-[#2E4BA4]"
          onPress={() => {
            router.push("/(tabs)/profile/edit");
          }}
        >
          <Ionicons name="pencil" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View className="flex items-center justify-center mb-6">
        <Image
          className="border-2 border-white rounded-lg w-24 h-24"
          source={require("../../../assets/images/avatar.jpg")}
        />
      </View>
      <View className="flex flex-col items-center justify-center gap-4">
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-white">Personalnummer:</Text>
          <Text className="text-lg text-white">1234</Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-white">Telefonnummer:</Text>
          <Text className="text-lg text-white">123456789</Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-white">Vorname:</Text>
          <Text className="text-lg text-white">David</Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-white">Name:</Text>
          <Text className="text-lg text-white">Kumar</Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-white">Führerschein:</Text>
          <Text className="text-lg text-white">Ja</Text>
        </View>
      </View>
    </View>
  );
}
