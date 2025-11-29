import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileHome() {
  return (
    <View className="flex-1 bg-[#273444] p-6">
      <View className="bg-[#4269E1] p-4 mb-8 rounded-lg flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-4">
          <Image
            source={require("../../../assets/images/avatar.jpg")}
            className="w-14 h-14 border-2 border-white rounded-lg"
          />
          <Text className="text-white text-xl font-semibold">John Doe</Text>
        </View>
        <TouchableOpacity
          className="w-14 h-14 bg-white rounded-lg items-center justify-center"
          onPress={() => router.push("/(auth)/login")}
        >
          <Ionicons name="power" size={24} color="#EF4444" />
        </TouchableOpacity>
      </View>

      <View className="flex flex-col items-start justify-center gap-2 mb-8">
        <Text className="text-white text-lg">Über mich</Text>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Profil</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
      </View>

      <View className="flex flex-col items-start justify-center gap-2 mb-8">
        <Text className="text-white text-lg">Settings</Text>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Sprache</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/change-password")}
        >
          <Text className="text-black">Passwort ändern</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Impressum</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Datenschutzerklärung</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Allgemeine Geschäftsbedingung</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
