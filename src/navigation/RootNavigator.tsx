import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store';
import AppDrawerNavigator from './AppDrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const RootNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
        { isLoggedIn ? <AppDrawerNavigator/> : <AuthStackNavigator /> }
    </NavigationContainer>
  )
}

export default RootNavigator