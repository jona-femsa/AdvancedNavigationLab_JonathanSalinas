import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { DrawerParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/main/SettingsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName='Home'
    >
        <Drawer.Screen name='Home' component={ BottomTabNavigator } />
        <Drawer.Screen name='Profile' component={ ProfileScreen } />
        <Drawer.Screen name='Settings' component={ SettingsScreen } />
    </Drawer.Navigator>
  )
}

export default AppDrawerNavigator