// src/screens/auth/LoginScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>Inicia sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default LoginScreen;
