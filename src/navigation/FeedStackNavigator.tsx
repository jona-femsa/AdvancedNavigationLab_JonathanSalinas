import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { FeedStackParamList } from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/features/SearchScreen';
import DetailsScreen from '../screens/features/DetailsScreen';

type FeedStackNavigatorProps = {
    initialRouteName: keyof FeedStackParamList;
  };

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigator: React.FC<FeedStackNavigatorProps> = ({ initialRouteName }) => {
  return (
    <Stack.Navigator initialRouteName={ initialRouteName }>
        <Stack.Screen name='Home' component={ HomeScreen }/>
        <Stack.Screen name='Search' component={ SearchScreen } />
        <Stack.Screen name='Details' component={ DetailsScreen }/>
    </Stack.Navigator>
  )
}

export default FeedStackNavigator