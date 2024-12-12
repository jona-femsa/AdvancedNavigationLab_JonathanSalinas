import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AuthStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresa tus datos</Text>
      <TextInput
        style={styles.input}
        placeholder="User"
        value="jona"
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value="password"
        editable={false}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={ styles.button }
        onPress={() =>
          dispatch(login())
        }
      >
        <Text style={styles.itemName}>Iniciar sesión</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={ styles.link }
        onPress={() =>
          navigation.navigate('Register')
        }
      >
        <Text style={styles.itemName}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  link: {
    marginTop: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#f4f4f4',
    borderColor: '#7c9885',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: '#033f63',
    marginVertical: 10,
    opacity: 0.6,
  },
  text: {
    fontSize: 18,
    color: '#033f63',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
