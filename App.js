import React, {useEffect, Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/config/router'
import messaging from '@react-native-firebase/messaging';
import { Alert, Text } from 'react-native';
import NotifService from './NotificationService';
import database from '@react-native-firebase/database';

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
  const [suhu, setSuhu] = useState();
  const [ph, setPH] = useState();
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

  const Suhu = () =>  {
    database()
            .ref('/Hasil_Pembacaan/Temperature')
            .on('value', snapshot => {

             setSuhu(snapshot.val());
            });
  }

  useEffect (() => {
    // requestUserPermission();
    // getToken();
    Suhu();
    if(suhu < 22){
        notif.localNotif();
    }
    // console.log(suhu);
    SplashScreen.hide();

    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', remoteMessage.notification?.body);
    // });

    // return unsubscribe;
  }, [])
  
  return (
    
    <NavigationContainer>
        <Text>
            {suhu}
        </Text>
      <Router />
      {registerToken && fcmRegistered}
    </NavigationContainer>
  )
}

export default App