import React from "react";
import { Text, View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../style/screenPageStyle";

export const Home = () => {
  return (
    <View style={styles.mainBox}>
      <Entypo name="home" size={48} color="black" />
      <View style={styles.TextBox}>
        <Text> Home </Text>
        <Text> 홈 </Text>
      </View>
    </View>
  );
};
