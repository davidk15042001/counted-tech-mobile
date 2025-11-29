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
    <View className="flex-1 bg-[#273444] items-center justify-center">
      <Image source={logo} resizeMode="contain" className="w-36 h-36 mb-4" />
      <Text className="text-white text-2xl font-bold">Counted Tech</Text>
      {showSubtitle && (
        <Text className="absolute bottom-8 text-white text-xs">developed by Shuziren</Text>
      )}
    </View>
  );
}
