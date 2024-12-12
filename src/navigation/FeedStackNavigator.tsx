import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { FeedStackParamList } from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/features/SearchScreen';
import DetailsScreen from '../screens/features/DetailsScreen';
import CustomHeader from '../components/CustomHeader';

type FeedStackNavigatorProps = {
    initialRouteName: keyof FeedStackParamList;
  };

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigator: React.FC<FeedStackNavigatorProps> = ({ initialRouteName }) => {
  return (
    <Stack.Navigator 
      initialRouteName={ initialRouteName }
      screenOptions={{
        animation: "slide_from_right"
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={ HomeScreen }
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name='Search' 
          component={ SearchScreen }
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen 
          name='Details'
          component={ DetailsScreen }
          options={({route}) => ({
            header: () => <CustomHeader title={ route.params.name } showBackButton={ true }/>
          })}/>
    </Stack.Navigator>
  )
}

export default FeedStackNavigator