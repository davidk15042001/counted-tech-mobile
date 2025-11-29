import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function MaterialAddModal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16, paddingTop: 48 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ position: "absolute", right: 16, top: 12, backgroundColor: "#000", borderRadius: 8, padding: 8 }}>
        <Text style={{ color: "#FFF", fontWeight: "700" }}>Close</Text>
      </TouchableOpacity>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Add Material</Text>
      <TextInput placeholder="Title" placeholderTextColor="#94A3B8" style={{ backgroundColor: "#324155", color: "#FFFFFF", borderRadius: 10, paddingHorizontal: 14, height: 48, marginBottom: 12 }} value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" placeholderTextColor="#94A3B8" style={{ backgroundColor: "#324155", color: "#FFFFFF", borderRadius: 10, paddingHorizontal: 14, height: 100, marginBottom: 12 }} multiline value={desc} onChangeText={setDesc} />
      <TouchableOpacity style={{ backgroundColor: "#2E4BA4", height: 48, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 8 }} onPress={() => router.back()}>
        <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
