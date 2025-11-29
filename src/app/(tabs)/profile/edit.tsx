import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";

export default function EditProfile() {
  const [name, setName] = useState("");

  return (
      <View className="flex-1 bg-[#273444] p-6">
        <View className="flex flex-row items-center justify-between mb-6">
          <BackButton />
        </View>
        <View className="flex items-center justify-center mb-6">
          <Image
            className="border-2 border-white rounded-lg w-24 h-24"
            source={require("../../../assets/images/avatar.jpg")}
          />
        </View>
              <ScrollView className="">
                <TextInput
                  placeholder="Nachname"
                  placeholderTextColor="#838D95"
                  className="bg-white p-4 rounded-lg mb-6"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  placeholder="Vorname"
                  placeholderTextColor="#838D95"
                  className="bg-white p-4 rounded-lg mb-6"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  placeholder="Personalnummer"
                  placeholderTextColor="#838D95"
                  className="bg-white p-4 rounded-lg mb-6"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  placeholder="Telefonnummer"
                  placeholderTextColor="#838D95"
                  className="bg-white p-4 rounded-lg mb-6"
                  value={name}
                  onChangeText={setName}
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
                <TouchableOpacity className="bg-[#4269E1] p-4 rounded-lg flex items-center justify-center mt-6" onPress={() => router.push("/(tabs)/profile")}> 
                  {/* double chevron right icon to indicate continue */}
                </TouchableOpacity>
              </ScrollView>
      </View>
  );
}

const input = { backgroundColor: "#324155", color: "#FFFFFF", borderRadius: 10, paddingHorizontal: 14, height: 48, marginBottom: 12 } as const;
