import React, { ReactNode } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  align?: "center" | "top";
}

export default function ModalCard({ visible, onClose, title, children, align = "center" }: Props) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View className="flex-1">
        <View className="absolute inset-0 bg-black/50" />
        <View className={`absolute inset-0 ${align === "top" ? 'justify-start pt-20' : 'justify-center'} items-center px-4`}>
          <View className="bg-white rounded-2xl w-full max-w-[520px] p-4">
            <TouchableOpacity onPress={onClose} className="absolute right-3 top-3 p-2 rounded-lg">
              <Ionicons name="close" size={20} color="#000" />
            </TouchableOpacity>
            {!!title && <Text className="text-black text-lg font-semibold text-center mb-2">{title}</Text>}
            <View className="mt-2">{children}</View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
