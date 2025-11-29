import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

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
        <TouchableOpacity className="w-14 h-14 bg-white rounded-lg">
          {/* red power button icon this is the logout button */}
        </TouchableOpacity>
      </View>

      <View className="flex flex-col items-start justify-center gap-2 mb-8">
        <Text className="text-white text-lg">Über mich</Text>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Profil</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
      </View>
      
      <View className="flex flex-col items-start justify-center gap-2 mb-8">
        <Text className="text-white text-lg">Settings</Text>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Sprache</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/change-password")}
        >
          <Text className="text-black">Passwort ändern</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Impressum</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Datenschutzerklärung</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-white flex p-4 rounded-lg flex flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/profile/profile")}
        >
          <Text className="text-black">Allgemeine Geschäftsbedingung</Text>
          {/* right chevron arrow icon */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const btn = {
  backgroundColor: "#2E4BA4",
  borderRadius: 10,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 12,
} as const;
const btnTxt = { color: "#FFFFFF", fontWeight: "700" } as const;
