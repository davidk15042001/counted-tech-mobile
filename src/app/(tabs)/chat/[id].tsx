import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../components/BackButton";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Msg { id: string; text: string; fromMe?: boolean }

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [messages, setMessages] = useState<Msg[]>([
    { id: "1", text: "Hello!" },
    { id: "2", text: "Hi, how are you?", fromMe: true },
  ]);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    const myMsg: Msg = { id: String(Date.now()), text: draft, fromMe: true };
    setMessages((m) => [...m, myMsg]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [...m, { id: String(Date.now() + 1), text: "Got it!" }]);
    }, 800);
  };

  return (
    <View className="flex-1 bg-[#273444]">
      <StatusBar translucent={false} style="dark" backgroundColor="#FFFFFF" />
      <View className="flex bg-white p-6 rounded-b-xl flex-row items-center justify-center pb-4">
        <BackButton />
        <View className="flex-1 items-center">
          <Text className="text-black font-semibold text-3xl">Chat {id}</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.fromMe ? "flex-end" : "flex-start", backgroundColor: item.fromMe ? "#4269E1" : "#FFFFFF", padding: 10, borderRadius: 12, marginVertical: 4, maxWidth: "80%" }}>
            <Text style={{ color: item.fromMe ? "#FFFFFF" : "#000" }}>{item.text}</Text>
          </View>
        )}
      />
      <View className="flex m-6 flex-row items-center justify-center p-2 rounded-lg bg-white">
        <TextInput value={draft} onChangeText={setDraft} placeholder="Nachricht senden..." placeholderTextColor="#94A3B8" className="flex-1 p-0 text-lg"/>
        <TouchableOpacity onPress={send} className="bg-[#4269E1] p-2 rounded-lg">
          <Ionicons name="arrow-up" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
