import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";

export default function SignupStep1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [other, setOther] = useState("");

  return (
    <View className="flex-1 p-6">
      <View className="flex items-start pb-4">
        <BackButton />
      </View>
      <View className="flex items-center justify-center pb-6">
        <Text className="text-white font-semibold text-3xl">Über dich</Text>
      </View>
      <ScrollView className="">
        <View className="flex items-center justify-center">
          <Image
            source={require("../../../assets/images/avatar.jpg")}
            className="w-24 h-24 rounded-lg border-2 border-white mb-6"
          />
        </View>
        <TextInput
          placeholder="Nachname"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Vorname"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Personalnummer"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Telefonnummer"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        {/* this is a radio selection and the one with the border is the indication it was selected, it's either yesor no here*/}
        <View className="flex flex-col w-full">
          <Text className="text-white mb-2">Führerschein</Text>
          <View className="flex flex-row w-full gap-4">
            <View className="flex-1 items-center p-4 rounded-lg bg-[#2E4BA4] border-2 border-white text-white">
              {/* check icon */}
            </View>
            <View className="flex-1 items-center p-4 rounded-lg bg-red-600 text-white">
              {/* cancel icon */}
            </View>
          </View>
        </View>
        <TouchableOpacity className="bg-[#4269E1] p-4 rounded-lg flex items-center justify-center mt-6" onPress={() => router.push("/(auth)/signup/step2")}> 
          {/* double chevron right icon to indicate continue */}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#273444", padding: 16, paddingTop: 64 },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  headerTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  input: { backgroundColor: "#324155", color: "#FFFFFF", borderRadius: 10, paddingHorizontal: 14, height: 48, marginBottom: 12 },
  primaryBtn: { backgroundColor: "#2E4BA4", height: 48, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 8 },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "700" },
});
