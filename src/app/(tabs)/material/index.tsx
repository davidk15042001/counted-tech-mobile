import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MaterialListScreen() {
  const [materials] = useState(
    Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), title: `Material ${i + 1}`, desc: "Brief description." }))
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>Materials</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/material/add")} className="bg-[#4269E1] p-2 rounded-lg">
          <Ionicons name="add-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/(tabs)/material/${item.id}`)}
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
