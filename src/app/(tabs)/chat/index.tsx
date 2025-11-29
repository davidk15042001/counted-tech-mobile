import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
const avatarSource = require("../../../assets/images/car.png");

export default function ChatListScreen() {
  const [chats] = useState(
    Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), name: `Person ${i + 1}`, last: "Hey there!" }))
  );

  return (
    <View className="flex-1 bg-[#273444] p-6">
      <Text className="text-white text-xl font-bold mb-6">Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/(tabs)/chat/${item.id}`)} className="mb-4 flex-row items-center gap-4 p-3 mb-3 bg-white rounded-lg">
            <Image source={avatarSource} className="w-14 h-14 rounded-lg" />
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
