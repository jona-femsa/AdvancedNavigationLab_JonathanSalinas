import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { lazy, Suspense } from 'react'
import { FeedStackParamList } from './types';
import Head from '../components/Head';
import { ActivityIndicator } from 'react-native';

const HomeScreen = lazy(() => import('../screens/main/HomeScreen'));
const SearchScreen = lazy(() => import('../screens/features/SearchScreen'));
const DetailsScreen = lazy(() => import('../screens/features/DetailsScreen'));

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
          options={{
            header: () => <Head title='Inicio'/>,
          }}>
          {() => (
            <Suspense fallback={<ActivityIndicator size="large" color="#033f63"/>}>
              <HomeScreen />
            </Suspense>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name='Search'
          options={{
            header: () => <Head title='Buscar'/>,
          }}>
          {() => (
            <Suspense fallback={<ActivityIndicator size="large" color="#033f63"/>}>
              <SearchScreen />
            </Suspense>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name='Details'
          options={({route}) => ({
            header: () => <Head title={ route.params.name } showBackButton={ true }/>
          })}>
          {({ route }) => (
            <Suspense fallback={<ActivityIndicator size="large" color="#033f63"/>}>
              <DetailsScreen route={ route }/>
            </Suspense>
          )}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default FeedStackNavigator