import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ImageSourcePropType, Pressable } from "react-native";
import ModalCard from "../../../components/ModalCard";
import Ionicons from "@expo/vector-icons/Ionicons";

type Task = { id: string; title: string; desc: string; image?: ImageSourcePropType };

export default function TodoListScreen() {
  const [tasks] = useState<Task[]>(
    Array.from({ length: 10 }).map((_, i) => ({
      id: String(i + 1),
      title: `Task ${i + 1}`,
      desc: "Lorem ipsum dolor sit amet.",
      image: i % 3 === 0 ? require("../../../assets/images/car.png") : undefined,
    }))
  );
  const [selected, setSelected] = useState<Task | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <View className="flex-1 bg-[#273444] p-6">
      <Text className="text-white text-xl font-bold mb-4">Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item);
              setOpen(true);
            }}
            className="p-3 rounded-lg bg-white mb-4"
          >
            <Text className="text-black font-bold">{item.title}</Text>
            <Text className="text-gray-200">{item.desc}</Text>
          </TouchableOpacity>
        )}
      />

      <ModalCard visible={open} onClose={() => setOpen(false)}>
        {selected?.image && (
          <Image source={selected.image} className="rounded-lg w-full h-24 my-6" resizeMode="cover" />
        )}
        <View className="w-full p-4 bg-white">
          <Text className="text-black">{selected?.desc}</Text>
        </View>
        <View className="w-full my-6">
          <Pressable className="flex items-center w-full p-4 bg-[#4269E1] rounded-lg" onPress={()=>setOpen(false)}>
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </Pressable>
        </View>
      </ModalCard>
    </View>
  );
}
