import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet } from "react-native";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Willkommen zurück</Text>
      <Text className="text-white mb-4 text-center px-8">Schön, dich wiederzusehen. Wir wünschen dir einen schönen Arbeitstag.</Text>

      <View style={styles.form}>
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
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>

        <View style={{ height: 16 }} />
        <View className="flex flex-row items-center justify-center gap-2">
          <Text className="text-white">Noch keinen Account?</Text>
          <Link href="/(auth)/signup/step1" className="font-bold text-white">Registriere dich</Link>
        </View>

        <View style={{ height: 24 }} />
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 16 }}>
          <TouchableOpacity onPress={() => setShowTerms(true)}><Text style={styles.link}>Du hast Fragen? Wir sind da.</Text></TouchableOpacity>
        </View>
      </View>

      <DocModal
        visible={showTerms}
        title="Terms & Conditions"
        onClose={() => setShowTerms(false)}
      />
      <DocModal
        visible={showPrivacy}
        title="Privacy Policy"
        onClose={() => setShowPrivacy(false)}
      />
    </View>
  );
}

function DocModal({ visible, onClose, title }: { visible: boolean; onClose: () => void; title: string; }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <TouchableOpacity onPress={onClose} style={styles.modalClose}>
            <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.modalBody}>
              Placeholder content. You can replace this with your real {title.toLowerCase()} content.
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.confirmBtn} onPress={onClose}>
            <Text style={styles.confirmBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#273444", padding: 24, paddingTop: 80 },
  title: { color: "#FFFFFF", fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 24 },
  form: { gap: 12 },
  input: {
    backgroundColor: "#324155",
    color: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
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
  muted: { color: "#B0BEC5" },
  link: { color: "#FFFFFF", fontWeight: "600" },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: "#273444",
    borderRadius: 16,
    minHeight: 360,
    maxHeight: "80%",
    paddingTop: 48,
    overflow: "hidden",
  },
  modalClose: { position: "absolute", right: 12, top: 12, padding: 8, backgroundColor: "#000", borderRadius: 8 },
  modalTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "700", textAlign: "center", marginBottom: 12 },
  modalBody: { color: "#E5E7EB", paddingHorizontal: 16, paddingBottom: 16 },
  confirmBtn: { backgroundColor: "#2E4BA4", margin: 16, borderRadius: 10, height: 44, alignItems: "center", justifyContent: "center" },
  confirmBtnText: { color: "#FFFFFF", fontWeight: "700" },
});
