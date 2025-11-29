import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalCard from "../../../components/ModalCard";

export default function MaterialListScreen() {
  type Material = { id: string; name: string; anzahl: string; einheit: string };
  const [materials, setMaterials] = useState<Material[]>(
    Array.from({ length: 8 }).map((_, i) => ({
      id: String(i + 1),
      name: `Material ${i + 1}`,
      anzahl: String((i % 5) + 1),
      einheit: "Stk",
    }))
  );
  const [selected, setSelected] = useState<Material | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [addName, setAddName] = useState("");
  const [addAnzahl, setAddAnzahl] = useState("");
  const [addEinheit, setAddEinheit] = useState("");

  return (
    <View className="flex-1 bg-[#273444] p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white text-xl font-bold">Materials</Text>
        <TouchableOpacity
          onPress={() => setShowAdd(true)}
          className="bg-[#4269E1] p-2 rounded-lg"
        >
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
            className="p-4 rounded-lg bg-white mb-4"
          >
            <Text className="text-black">{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <ModalCard
        visible={showDetail}
        onClose={() => setShowDetail(false)}
        title={selected?.name}
      >
        <View className="gap-3">
          <View className="bg-white p-3 rounded-lg">
            <Text className="text-black text-xl font-semibold">{selected?.name}</Text>
          </View>
          <View className="flex-row gap-3">
            <View className="flex-1 bg-white rounded-xl px-4 py-3">
              <Text className="text-black">Anzahl</Text>
              <Text className="text-black font-semibold">
                {selected?.anzahl}
              </Text>
            </View>
            <View className="flex-1 bg-white rounded-xl px-4 py-3">
              <Text className="text-black">Einheit</Text>
              <Text className="text-black font-semibold">
                {selected?.einheit}
              </Text>
            </View>
          </View>
        <View className="w-full my-6">
          <Pressable className="flex items-center w-full p-4 bg-[#4269E1] rounded-lg" onPress={()=>setShowDetail(false)}>
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </Pressable>
        </View>
        </View>
      </ModalCard>

      <ModalCard
        visible={showAdd}
        onClose={() => setShowAdd(false)}
        title="Add Material"
      >
        <View className="gap-3">
          <Text className="text-black/80">Material</Text>
          <TextInput
            placeholder="Material name"
            placeholderTextColor="#6B7280"
            className="bg-white rounded-lg px-4 py-3"
            value={addName}
            onChangeText={setAddName}
          />
          <View className="flex-row gap-3 mb-6">
            <TextInput
              placeholder="Anzahl"
              placeholderTextColor="#6B7280"
              keyboardType="number-pad"
              className="flex-1 bg-white rounded-lg px-4 py-3"
              value={addAnzahl}
              onChangeText={setAddAnzahl}
            />
            <TextInput
              placeholder="Einheit"
              placeholderTextColor="#6B7280"
              className="flex-1 bg-white rounded-lg px-4 py-3"
              value={addEinheit}
              onChangeText={setAddEinheit}
            />
          </View>
          <TouchableOpacity
            className="flex items-center w-full p-4 bg-[#4269E1] rounded-lg"
            onPress={() => {
              if (!addName || !addAnzahl || !addEinheit) return;
              const newItem: Material = {
                id: String(Date.now()),
                name: addName,
                anzahl: addAnzahl,
                einheit: addEinheit,
              };
              setMaterials((prev) => [newItem, ...prev]);
              setAddName("");
              setAddAnzahl("");
              setAddEinheit("");
              setShowAdd(false);
            }}
          >
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ModalCard>
    </View>
  );
}
