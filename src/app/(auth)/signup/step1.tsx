import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignupStep1() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [personalNo, setPersonalNo] = useState("");
  const [phone, setPhone] = useState("");
  const [hasLicense, setHasLicense] = useState<boolean | null>(null);

  const canContinue = lastName && firstName && personalNo && phone && hasLicense !== null;

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
          value={lastName}
          onChangeText={setLastName}
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
          value={personalNo}
          onChangeText={setPersonalNo}
        />
        <TextInput
          placeholder="Telefonnummer"
          placeholderTextColor="#838D95"
          className="bg-white p-4 rounded-lg mb-6"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        {/* Radio selection for Führerschein */}
        <View className="flex flex-col w-full">
          <Text className="text-white mb-2">Führerschein</Text>
          <View className="flex flex-row w-full gap-4">
            <TouchableOpacity onPress={() => setHasLicense(true)} className={`flex-1 items-center p-4 rounded-lg ${hasLicense === true ? 'bg-[#2E4BA4] border-2 border-white' : 'bg-white'}`}>
              <Ionicons name="checkmark" size={22} color={hasLicense === true ? '#FFFFFF' : '#000'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHasLicense(false)} className={`flex-1 items-center p-4 rounded-lg ${hasLicense === false ? 'bg-red-600 border-2 border-white' : 'bg-white'}`}>
              <Ionicons name="close" size={22} color={hasLicense === false ? '#FFFFFF' : '#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity disabled={!canContinue} className={`p-4 rounded-lg flex items-center justify-center mt-6 ${canContinue ? 'bg-[#4269E1]' : 'bg-[#2E4BA4]'}`} onPress={() => router.push("/(auth)/signup/step2")}> 
          <Ionicons name="chevron-forward-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

 
