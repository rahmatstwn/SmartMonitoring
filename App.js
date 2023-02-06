import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/config/router'
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  async function getToken(){
    const fcmToken = await messaging().getToken();
    console.log(fcmToken);
  }

  useEffect (() => {
    requestUserPermission();
    getToken();
    
    SplashScreen.hide();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', remoteMessage.notification?.body);
    });

    return unsubscribe;
  }, [])
  
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App
