import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  pagingEnabled,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  // console.log(SCREEN_WIDTH);

  const API_KEY = "63b3e6ef6feaf501a5e28655a7de500c";

  const icons = {
    Person: "account-heart-outline",
    Phone: "cellphone",
    Call: "phone-classic",
  };

  const [city, setCity] = useState("Loading---");
  const [person, setPerson] = useState([]);
  const [ok, setOk] = useState(true);

  const getPermission = async () => {
    // api 내용 안에 granted(위치 확인 동의) 의 여부
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false); //유저 거절
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].region);

    const response = await fetch("https://koreanjson.com/users");
    const list = await response.json();
    setPerson(list);
    // console.log(list[0]);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {person.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="#0e4f3d" size="large" />
          </View>
        ) : (
          person.map((p) => {
            // console.log(p.phone.split('-')[0] === '010'? true : false)
            return (
              <View key={p.id} style={styles.day}>
                <View style={styles.iconAlign}>
                  <MaterialCommunityIcons
                    name="account-heart-outline"
                    size={38}
                    color="black"
                  />
                  <Text>이름: {p.name}</Text>
                </View>
                <Text>email: {p.email}</Text>
                <View style={styles.iconAlign}>
                  <MaterialCommunityIcons
                    name={
                      p.phone.split("-")[0] === "010" ? icons.Phone : icons.Call
                    }
                    size={24}
                    color="black"
                  />
                  <Text>phone: {p.phone}</Text>
                </View>
                <Text>
                  city: {p.province}-{p.city}-{p.district}-{p.street}
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e4f3d",
  },
  city: {
    // backgroundColor: "#FE7167",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  cityName: {
    marginTop: 50,
    color: "white",
    fontSize: 48,
  },
  weather: {
    backgroundColor: "#EEDFBE",
  },
  day: {
    width: 414,
    // width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  temp: {
    marginTop: -100,
    fontSize: 160,
    color: "#0e4f3d",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    color: "#0e4f3d",
  },
  iconAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
});
