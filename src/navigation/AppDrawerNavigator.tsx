import Icon from '@react-native-vector-icons/feather';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Header from '../components/Header';
import ProfileScreen from '../screens/main/ProfileScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerParamList } from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'left',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#033f63',
          width: 240,
        },
        drawerLabelStyle: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '500',
        },
        drawerActiveTintColor: '#b5b682',
        drawerInactiveTintColor: '#28666e',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
          header: () => <Header title="Bienvenido" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
          header: () => <Header title="Jonathan" />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="settings" size={size} color={color} />,
          header: () => <Header title="Configuración" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
