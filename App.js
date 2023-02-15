import React, {useEffect, Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/config/router'
import messaging from '@react-native-firebase/messaging';
import { Alert, Text } from 'react-native';
import NotifService from './NotificationService';

const App = () => {
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // async function getToken(){
  //   const fcmToken = await messaging().getToken();
  //   console.log(fcmToken);
  // }

  const [registerToken, setRegisterToken] = useState();
  const [fcmRegistered, setFcmRegistered] = useState(false);
  const onRegister = (token) => {
    setRegisterToken(token.token);
    setFcmRegistered(true)
  };
  const onNotif = (notif) =>{
    Alert.alert(notif.title, notif.message);
  };
  const notif = new NotifService(onRegister, onNotif);

  const handlePerm = (perms) =>{
    Alert.alert('Permission', JSON.stringify(perms));
  };

  useEffect (() => {
    // requestUserPermission();
    // getToken();
    SplashScreen.hide();
    notif.localNotif();

    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', remoteMessage.notification?.body);
    // });

    // return unsubscribe;
  }, [])
  
  return (
    <NavigationContainer>
      <Router />
      {registerToken && fcmRegistered}
    </NavigationContainer>
  )
}

export default App