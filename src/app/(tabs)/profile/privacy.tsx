import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackButton from "../../../components/BackButton";

export default function PrivacyScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#273444", padding: 16, paddingTop: 64 }}>
      <View style={{ position: "absolute", left: 12, top: 16 }}>
        <BackButton />
      </View>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 16, textAlign: "center" }}>Privacy Policy</Text>
      <ScrollView>
        <Text style={{ color: "#E5E7EB" }}>
          Placeholder privacy policy... Replace with your content.
        </Text>
      </ScrollView>
    </View>
  );
}
