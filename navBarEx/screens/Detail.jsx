import React from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

function Detail({ route, navigation }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id : {route.params.id}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="다음"
          onPress={() => {
            navigation.push("Detail", { id: route.params.id + 1 });
          }}
        />
        <Button
          title="뒤로가기"
          onPress={() => {
            navigation.pop();
          }}
        />
        <Button
          title="처음으로"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
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
