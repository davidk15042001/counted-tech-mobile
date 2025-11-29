import React, { ReactNode } from "react";
import { Modal, Pressable, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

export default function ModalCard({ visible, onClose, children }: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} className="flex-1 w-full">
        <Backdrop />
        <Pressable className="w-full flex p-6 items-center justify-center">
            <View className="bg-white p-4 rounded-lg flex flex-col w-full">
                <View style={{flexDirection: "row-reverse"}}>
                    <Pressable onPress={onClose} className="p-2 bg-black rounded-lg">
                        <Ionicons name="close" size={24} color="#fff" />
                    </Pressable>
                </View>
                <View>{children}</View>
            </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function Backdrop() {
    const { BlurView } = require("expo-blur");
    return (
      <BlurView
        intensity={80}
        tint="dark"
        style={{ ...StyleSheet.absoluteFillObject }}
      />
    );
}
