import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalCard from "../../../components/ModalCard";

export default function MaterialListScreen() {
  const [materials] = useState(
    Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), title: `Material ${i + 1}`, desc: "Brief description." }))
  );
  const [selected, setSelected] = useState<{ id: string; title: string; desc: string } | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <View className="flex-1 bg-[#273444] p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white text-xl font-bold">Materials</Text>
        <TouchableOpacity onPress={() => setShowAdd(true)} className="bg-[#4269E1] p-2 rounded-lg">
          <Ionicons name="add-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item);
              setShowDetail(true);
            }}
            className="p-3 rounded-lg bg-white mb-4"
          >
            <Text className="text-black font-bold">{item.title}</Text>
            <Text className="text-gray-200">{item.desc}</Text>
          </TouchableOpacity>
        )}
      />

      <ModalCard visible={showDetail} onClose={() => setShowDetail(false)} title={selected?.title} align="top">
        <Text className="text-black/80 mb-2">{selected?.desc}</Text>
      </ModalCard>

      <ModalCard visible={showAdd} onClose={() => setShowAdd(false)} title="Add Material" align="top">
        <View className="gap-3">
          <View className="bg-[#F3F4F6] rounded-xl px-4 py-3">
            <Text className="text-black/80">Title</Text>
          </View>
          <View className="bg-[#F3F4F6] rounded-xl px-4 py-6">
            <Text className="text-black/80">Description</Text>
          </View>
          <TouchableOpacity className="bg-[#2E4BA4] h-11 rounded-xl items-center justify-center" onPress={() => setShowAdd(false)}>
            <Text className="text-white font-bold">Save</Text>
          </TouchableOpacity>
        </View>
      </ModalCard>
    </View>
  );
}
