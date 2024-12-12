import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store';
import AppDrawerNavigator from './AppDrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const linking: LinkingOptions = {
  prefixes: ["labapp://", "https://labapp.local"],
  config: {
    screens: {
      Home: "home",
      Settings: "settings",
      Profile: "profile",
      Feed: {
        path: "feed",
        screens: {
          Details: "details/:id",
        },
      },
    },
  },
};


const RootNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer linking={ linking }>
        { isLoggedIn ? <AppDrawerNavigator/> : <AuthStackNavigator /> }
    </NavigationContainer>
  )
}

export default RootNavigator