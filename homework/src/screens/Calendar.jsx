import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../style/screenPageStyle";

export const Calendar = () => {
  return (
    <View style={styles.mainBox}>
      <MaterialCommunityIcons
        name="calendar-month-outline"
        size={48}
        color="black"
      />
      <View style={styles.TextBox}>
        <Text> Calendar</Text>
        <Text> 달력</Text>
      </View>
    </View>
  );
};
