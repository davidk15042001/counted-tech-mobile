import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MaterialAddModal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View className="flex-1 bg-[#273444] p-4 pt-12">
      <TouchableOpacity onPress={() => router.back()} className="absolute right-4 top-3 bg-black rounded-lg p-2">
        <Ionicons name="close" size={18} color="#FFFFFF" />
      </TouchableOpacity>
      <Text className="text-white text-xl font-bold mb-3">Add Material</Text>
      <TextInput placeholder="Title" placeholderTextColor="#94A3B8" className="bg-[#324155] text-white rounded-xl px-4 h-12 mb-3" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" placeholderTextColor="#94A3B8" className="bg-[#324155] text-white rounded-xl px-4 h-24 mb-3" multiline value={desc} onChangeText={setDesc} />
      <TouchableOpacity className="bg-[#2E4BA4] h-12 rounded-xl items-center justify-center mt-2" onPress={() => router.back()}>
        <Text className="text-white font-bold">Save</Text>
      </TouchableOpacity>
    </View>
  );
}
