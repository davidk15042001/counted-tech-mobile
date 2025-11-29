import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import assets from "../../../assets";

const avatars = [assets.avatar];

export default function ChatListScreen() {
  const [chats] = useState(
    Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), name: `Person ${i + 1}`, last: "Hey there!", avatar: { uri: avatars } }))
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/(tabs)/chat/${item.id}`)} className="flex flex-row items-center gap-4 p-2 mb-4 bg-white rounded-lg">
            <Image source={require("../../../assets/images/car.png")} className="w-14 h-14" />
            <View className="flex-1">
              <Text className="text-black font-semibold">{item.name}</Text>
              <Text className="text-black">{item.last}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
