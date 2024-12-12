import Icon from '@react-native-vector-icons/feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Head from '../components/Head';
import NotificationsScreen from '../screens/features/NotificationsScreen';
import FeedStackNavigator from './FeedStackNavigator';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#033f63',
        tabBarInactiveTintColor: '#d9d9d9',
      })}
    >
        <Tab.Screen
          name="Feed"
          children={() => <FeedStackNavigator initialRouteName="Home" />}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color} />,
          }}
          />
        <Tab.Screen
          name="Search"
          children={() => <FeedStackNavigator initialRouteName="Search" />}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="search" size={size} color={color} />,
          }}
          />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="bell" size={size} color={color} />,
            headerShown: true,
            header: () => <Head title="Notificaciones"/>,
          }}
          />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
