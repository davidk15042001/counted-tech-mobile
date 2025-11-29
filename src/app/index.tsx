import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, Animated, Easing, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();
  const scale = useRef(new Animated.Value(0.01)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [showCaption, setShowCaption] = useState(false);

  const startAnimation = useMemo(
    () =>
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.out(Easing.exp),
        }),
      ]),
    [scale]
  );

  useEffect(() => {
    startAnimation.start(() => {
      setShowCaption(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }).start();
    });

    const navTimer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 8000);

    return () => clearTimeout(navTimer);
  }, [opacity, router, startAnimation]);

  return (
    <View className="flex-1 items-center justify-center bg-[#273444]">
      <View className="items-center" />
      <Animated.View style={{ transform: [{ scale }] }}>
        <Image source={require("../assets/images/logo.png")} style={{ width: 250, height: 250, resizeMode: "contain" }} />
        <Text className="text-xl font-semibold text-center text-white">Counted Tech</Text>
      </Animated.View>

      {showCaption && (
        <Animated.View
          style={{ position: "absolute", bottom: 28, opacity }}
          className="px-4"
        >
          <Text className="text-center text-white">
            developed by Shuziren
          </Text>
        </Animated.View>
      )}
    </View>
  );
}
