import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ModalCard from "../../../components/ModalCard";

export default function TodoListScreen() {
  const [tasks] = useState(
    Array.from({ length: 10 }).map((_, i) => ({ id: String(i + 1), title: `Task ${i + 1}`, desc: "Lorem ipsum dolor sit amet." }))
  );
  const [selected, setSelected] = useState<{ id: string; title: string; desc: string } | null>(null);
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

      <ModalCard visible={open} onClose={() => setOpen(false)} title={selected ? selected.title : undefined} align="top">
        <Text className="text-black/80">{selected?.desc}</Text>
      </ModalCard>
    </View>
  );
}
