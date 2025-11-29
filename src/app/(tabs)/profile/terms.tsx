import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackButton from "../../../components/BackButton";

export default function TermsScreen() {
  return (
    <View className="flex-1 bg-[#273444] p-4 pt-16">
      <View className="absolute left-3 top-3">
        <BackButton />
      </View>
      <Text className="text-white text-xl font-bold mb-4 text-center">Terms & Conditions</Text>
      <ScrollView>
        <Text className="text-gray-200">Placeholder terms... Replace with your content.</Text>
      </ScrollView>
    </View>
  );
}
