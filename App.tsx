import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Login from "./screens/login.screen";
import Register from "./screens/register.screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1725',
  },
})

export default function App() {
  const [screen, setScreen] = useState('login');
  let ScreenView = <Login />;

  switch (screen) {
    case 'login':
      ScreenView = <Login />;
      break;
    case 'register':
      ScreenView = <Register />;
      break;
    default:
      ScreenView = <Text>No such screen found</Text>
  }

  return (
    <View style={styles.container}>
      { ScreenView }
    </View>
  )
}