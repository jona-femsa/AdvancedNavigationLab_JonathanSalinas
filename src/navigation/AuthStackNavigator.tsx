import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { AuthStackParamList } from './types';
import Head from '../components/Head';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component={ LoginScreen }
            options={{
              header: () => <Head title='Login'/>,
            }}
        />
        <Stack.Screen
            name='Register'
            component={ RegisterScreen }
            options={{
              header: () => <Head title='Registro' showBackButton={ true }/>,
            }}
        />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator