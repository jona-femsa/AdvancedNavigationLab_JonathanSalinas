import Icon from "@react-native-vector-icons/feather";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={ styles.button }
        onPress={() => 
          dispatch(logout())
        }
      >
        <Text style={styles.itemName}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF"
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomColor: '#7c9885',
    marginVertical: 5,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    color: '#033f63',
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default ProfileScreen;
