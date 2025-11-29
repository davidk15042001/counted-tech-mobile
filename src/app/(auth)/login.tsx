import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalCard from "../../components/ModalCard";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <View className="flex-1 bg-[#273444] p-6">
      <Text className="text-white text-2xl font-bold text-center my-6">Willkommen zurück</Text>
      <Text className="text-white mb-4 text-center px-8">Schön, dich wiederzusehen. Wir wünschen dir einen schönen Arbeitstag.</Text>

      <View className="gap-3">
        <TextInput
          placeholder="Telefonnummer"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Passwort"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="bg-[#4269E1] py-4 text-center rounded-lg flex items-center" onPress={() => router.replace("/(tabs)/start")}> 
          <Ionicons name="checkmark" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={{ height: 16 }} />
        <View className="flex flex-row items-center justify-center gap-2">
          <Text className="text-white">Noch keinen Account?</Text>
          <Link href="/(auth)/signup/step1" className="font-bold text-white">Registriere dich</Link>
        </View>

        <View style={{ height: 24 }} />
        <View className="flex flex-row items-center justify-center gap-4">
          <TouchableOpacity onPress={() => setShowTerms(true)}><Text className="text-white font-semibold">Du hast Fragen? Wir sind da.</Text></TouchableOpacity>
        </View>
      </View>

      <ModalCard visible={showTerms} onClose={() => setShowTerms(false)} title="Terms & Conditions">
        <ScrollView className="max-h-96">
          <Text className="text-black/80">
            Placeholder content. You can replace this with your real terms & conditions content.
          </Text>
        </ScrollView>
        <TouchableOpacity className="bg-[#2E4BA4] mt-4 rounded-xl h-11 items-center justify-center" onPress={() => setShowTerms(false)}>
          <Text className="text-white font-bold">Confirm</Text>
        </TouchableOpacity>
      </ModalCard>

      <ModalCard visible={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <ScrollView className="max-h-96">
          <Text className="text-black/80">
            Placeholder content. You can replace this with your real privacy policy content.
          </Text>
        </ScrollView>
        <TouchableOpacity className="bg-[#2E4BA4] mt-4 rounded-xl h-11 items-center justify-center" onPress={() => setShowPrivacy(false)}>
          <Text className="text-white font-bold">Confirm</Text>
        </TouchableOpacity>
      </ModalCard>
    </View>
  );
}
 
