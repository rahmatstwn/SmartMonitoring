import React, {useEffect, Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import Router from './src/config/router'
import messaging from '@react-native-firebase/messaging';
import { Alert, Text } from 'react-native';
import NotifService from './NotificationService';
import database from '@react-native-firebase/database';

const App = () => {
  // const function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // const function getToken(){
  //   const fcmToken = await messaging().getToken();
  //   console.log(fcmToken);
  // }
  const [suhu, setSuhu] = useState();
  const [ph, setPH] = useState();
  const [tds, setTDS] = useState();
  const [tinggi1, setTinggi1] = useState();
  const [tinggi2, setTinggi2] = useState();
  const [tinggi3, setTinggi3] = useState();
  const [tinggi4, setTinggi4] = useState();
  const [tinggi5, setTinggi5] = useState();
  const [diameter1, setDiameter1] = useState();
  const [diameter2, setDiameter2] = useState();
  const [diameter3, setDiameter3] = useState();
  const [diameter4, setDiameter4] = useState();
  const [diameter5, setDiameter5] = useState();
  const [umur, setUmur] =useState(30);
  
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
  const PH = () =>  {
    database()
            .ref('/Hasil_Pembacaan/pH')
            .on('value', snapshot => {

             setPH(snapshot.val());
            });
  }
  const TDS = () =>  {
    database()
            .ref('/Hasil_Pembacaan/TDS')
            .on('value', snapshot => {

             setTDS(snapshot.val());
            });
  }
   const Tinggi1 = () => {

        database()
            .ref('/Hasil_Pembacaan/Tanaman1/Tinggi1')
            .on('value', snapshot => {

             setTinggi1(snapshot.val());
                
            });
    }

    const Tinggi2 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman2/Tinggi2')
            .on('value', snapshot => {

             setTinggi2(snapshot.val());
            });
    }

    const Tinggi3 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman3/Tinggi3')
            .on('value', snapshot => {

             setTinggi3(snapshot.val());
            });
    }

    const Tinggi4 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman4/Tinggi4')
            .on('value', snapshot => {

             setTinggi4(snapshot.val());
            });
    }

    const Tinggi5 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman5/Tinggi5')
            .on('value', snapshot => {

             setTinggi5(snapshot.val());
            });
    }

    const Diameter1 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
            .on('value', snapshot => {

             setDiameter1(snapshot.val());
            });
    }

    const Diameter2 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman2/Diameter2')
            .on('value', snapshot => {

             setDiameter2(snapshot.val());
            });
    }

    const Diameter3 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman3/Diameter3')
            .on('value', snapshot => {

             setDiameter3(snapshot.val());
            });
    }

    const Diameter4 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman4/Diameter4')
            .on('value', snapshot => {

             setDiameter4(snapshot.val());
            });
    }

    const Diameter5 = () => {
        database()
            .ref('/Hasil_Pembacaan/Tanaman5/Diameter5')
            .on('value', snapshot => {

             setDiameter5(snapshot.val());
            });
    }

  useEffect (() => {
    // requestUserPermission();
    // getToken();
    Tinggi1();
    Tinggi2();
    Tinggi3();
    Tinggi4();
    Tinggi5();
    Diameter1();
    Diameter2();
    Diameter3();
    Diameter4();
    Diameter5();
    Suhu();
    PH();
    TDS();
    if(suhu > 25 && ph > 7.0 && tds < 110){
      notif.localNotifSuhuPhTDS();
      console.log(1)
    }else if(suhu > 25 && ph > 7.0){
      notif.localNotifSuhuPH();
      console.log(2)
    }else if(suhu > 25 && tds < 110){
      notif.localNotifSuhuTDS();
      console.log(3)
    }else if(ph > 7.0 && tds < 110){
      notif.localNotifpHTDS();
      console.log(4)
    }else if(suhu > 22){
      notif.localNotifSUHU();
      console.log(5)
    }else if(ph > 7.0){
      notif.localNotifPH();
      console.log(6)
    }else if(tds < 110){
      notif.localNotifTDS();
      console.log(7)
    }
    // console.log(suhu);
    SplashScreen.hide();

    // const unsubscribe = messaging().onMessage(const remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', remoteMessage.notification?.body);
    // });

    // return unsubscribe;
  }, [notif, suhu, ph, tds, tinggi1, tinggi2, tinggi3, tinggi4, tinggi5, diameter1, diameter2, diameter3, diameter4, diameter5, umur])
  
  return (
    
    <NavigationContainer>
        
      <Router />
      {registerToken && fcmRegistered}
    </NavigationContainer>
  )
}

export default App