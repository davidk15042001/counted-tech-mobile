import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function StartScreen() {
  return (
    <View className="bg-[#273444] flex-1 p-6 items-center justify-between text-white">
      <View className="flex flex-col items-center justify-center gap-4">
        <Text className="text-4xl font-semibold text-white">05:24:00</Text>
        <View className="bg-white p-6 rounded-lg"><Text className="text-5xl font-semibold">16:00</Text></View>
      </View>
      {/* the image should be in the middle.. but add some padding on the sides... and the image should not be cropped */}
      <View className="flex items-center justify-center">
        <Image source={require("../../assets/images/home.png")} />
      </View>
      <View className="flex flex-row items-center justify-center gap-6">
        <TouchableOpacity className="bg-white py-2 flex-1 items-center justify-center rounded-lg">
          <Text>Urlaub</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-2 items-center justify-center rounded-lg">
          {/* path icon */}
        </TouchableOpacity>
        <TouchableOpacity className="bg-white py-2 flex-1 items-center justify-center rounded-lg">
          <Text>Krankheitstage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
