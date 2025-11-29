import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";

export default function SignupStep2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [other, setOther] = useState("");

  return (
    <View className="flex-1 p-6">
      <View className="flex items-start pb-4">
        <BackButton />
      </View>
      <View className="flex items-center justify-center py-4 mb-6">
        <Text className="text-white font-semibold text-3xl">
          Ein letzter Schritt
        </Text>
      </View>
      <ScrollView className="">
        <TextInput
          placeholder="Code"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Passwort"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg my-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Passwort wiederholen"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={firstName}
          onChangeText={setFirstName}
        />
        {/* this is a radio selection and the one with the border is the indication it was selected, I don't know what it means to know if it's a multi select or single select, help check it */}
        <View className="flex flex-row w-full gap-4">
          <View className="flex-1 items-start justify-center p-4 rounded-lg bg-white text-white">
            <Text>Allgemeine Geschäftsbedingung</Text>
          </View>
          <View className="flex-1 items-start justify-center p-4 rounded-lg bg-white border-2 border-[#4269E1] text-white">
            <Text>Datenschutz</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-[#4269E1] p-4 rounded-lg flex items-center justify-center mt-6"
          onPress={() => router.replace("/(tabs)/start")}
        >
          {/* double chevron right icon to indicate continue */}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#273444", padding: 16, paddingTop: 64 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  input: {
    backgroundColor: "#324155",
    color: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: "#2E4BA4",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "700" },
});
