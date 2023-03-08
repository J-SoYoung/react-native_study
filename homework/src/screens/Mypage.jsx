import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../style/screenPageStyle";

export const Mypage = () => {
  return (
    <View style={styles.mainBox}>
      <Ionicons name="person-outline" size={48} color="black" />
      <View style={styles.TextBox}>
        <Text> Mypage </Text>
        <Text> 마이페이지 </Text>
      </View>
    </View>
  );
};
