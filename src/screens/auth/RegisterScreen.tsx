// src/screens/auth/RegisterScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text>Registro</Text>
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

export default RegisterScreen;
