import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

function Detail({ route }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id : {route.params.id}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
});
export default Detail;
