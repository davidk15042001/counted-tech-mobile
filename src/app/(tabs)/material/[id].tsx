import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function MaterialDetailModal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16, paddingTop: 48 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ position: "absolute", right: 16, top: 12, backgroundColor: "#000", borderRadius: 8, padding: 8 }}>
        <Text style={{ color: "#FFF", fontWeight: "700" }}>Close</Text>
      </TouchableOpacity>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Material {id}</Text>
      <Text style={{ color: "#E5E7EB" }}>Detailed info about Material {id}...</Text>
    </View>
  );
}
