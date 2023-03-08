import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

function Home({ navigation }) {
  console.log(navigation);
  return (
    <View>
      <Button
        title="Detail - 1열기"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
      <Button
        title="Detail - 2열기"
        onPress={() => navigation.push("Detail", { id: 2 })}
      />
      <Button
        title="Detail - 3열기"
        onPress={() => navigation.push("Detail", { id: 3 })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;
