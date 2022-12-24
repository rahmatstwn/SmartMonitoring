import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/config/router'

const App = () => {
  useEffect (() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App
