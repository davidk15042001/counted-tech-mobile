import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function TodoListScreen() {
  const [tasks] = useState(
    Array.from({ length: 10 }).map((_, i) => ({ id: String(i + 1), title: `Task ${i + 1}`, desc: "Lorem ipsum dolor sit amet." }))
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/(tabs)/todo/${item.id}`)}
            style={{ padding: 12, borderRadius: 10, backgroundColor: "#324155", marginBottom: 10 }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>{item.title}</Text>
            <Text style={{ color: "#E5E7EB" }}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
