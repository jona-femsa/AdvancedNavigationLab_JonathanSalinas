import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { BottomTabParamList } from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/features/SearchScreen';
import NotificationsScreen from '../screens/features/NotificationsScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Feed' component={ HomeScreen }/>
        <Tab.Screen name='Search' component={ SearchScreen } />
        <Tab.Screen name='Notifications' component={ NotificationsScreen } />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator