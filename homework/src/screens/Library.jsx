import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../style/screenPageStyle";


export const Library = () => {
  return (
    <View style={styles.mainBox}>
      <Ionicons name="library-outline" size={48} color="black" />
      <View style={styles.TextBox}>
        <Text> Library </Text>
        <Text> 도서관 </Text>
      </View>
    </View>
  );
};

