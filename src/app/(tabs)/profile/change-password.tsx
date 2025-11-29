import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import BackButton from "../../../components/BackButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ChangePassword() {
  const [oldP, setOldP] = useState("");
  const [newP, setNewP] = useState("");
  const [confirmP, setConfirmP] = useState("");

  return (
    <View className="flex-1 bg-[#273444] p-6">
      <View className="flex flex-row items-center justify-start mb-12">
        <BackButton />
      </View>
      <TextInput
        value={oldP}
        onChangeText={setOldP}
        placeholder="Altes passwort"
        placeholderTextColor="#838D95"
        className="bg-white p-4 py-5 rounded-lg mb-4"
        secureTextEntry
      />
      <TextInput
        value={newP}
        onChangeText={setNewP}
        placeholder="Neues passwort"
        placeholderTextColor="#838D95"
        className="bg-white p-4 py-5 rounded-lg mb-4"
        secureTextEntry
      />
      <TextInput
        value={confirmP}
        onChangeText={setConfirmP}
        placeholder="Neues passwort wiederholen"
        placeholderTextColor="#838D95"
        className="bg-white p-4 py-5 rounded-lg mb-4"
        secureTextEntry
      />
      <TouchableOpacity className="bg-[#4269E1] py-4 text-center rounded-lg flex items-center">
        <Ionicons name="checkmark" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const input = {
  backgroundColor: "#324155",
  color: "#FFFFFF",
  borderRadius: 10,
  paddingHorizontal: 14,
  height: 48,
  marginBottom: 12,
} as const;
