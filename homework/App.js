import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";

import { Home } from "./src/screens/Home";
import { Calendar } from "./src/screens/Calendar";
import { Library } from "./src/screens/Library";
import { Mypage } from "./src/screens/Mypage";

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName="Home">
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: () => (
              <Ionicons name="library-outline" size={24} color="black" />
            ),
          }}
        />
        <tab.Screen
          name="Mypage"
          component={Mypage}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}
