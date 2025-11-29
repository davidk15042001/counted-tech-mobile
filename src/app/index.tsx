import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { router } from "expo-router";
const logo = require("../assets/images/logo.png");

export default function SplashScreen() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtitle(true), 3500);
    const t2 = setTimeout(() => {
      // Dummy auth resolve -> navigate to Login for now
      router.replace("/(auth)/login");
    }, 7000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#273444" }}
    >
      <Image
        source={logo}
        resizeMode="contain"
        style={{ width: 140, height: 140, marginBottom: 16 }}
      />
      <Text style={{ color: "#FFFFFF", fontSize: 28, fontWeight: "700" }}>
        Counted Tech
      </Text>
      {showSubtitle && (
        <Text style={{ color: "#D1D5DB", fontSize: 16, marginTop: 8 }}>
          developed by Peace
        </Text>
      )}
    </View>
  );
}
