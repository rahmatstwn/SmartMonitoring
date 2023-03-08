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

  fungAHP = () => {
        const jumlData = 5;
        const jumlKriteria = 3;
        let bSt = false;
        let matriksData = [];
        let kuadratmatriks =[];
        let totalkuadratMatriks = 0;
        let eigenVector = [];
        let eigenVectorSebelumnya = [];
        let data = [];
        let i, j;


        for (i = 0; i < jumlData; i++) {
            data[i] = [];
            for (j = 0; j < jumlKriteria; j++) {
                data[i][j] = null;
            }
        }
        for (i = 0; i < jumlKriteria; i++) {
            matriksData[i] = [];
            kuadratmatriks[i] = []
            for (j = 0; j < jumlKriteria; j++) {
                matriksData[i][j] = 0;
                kuadratmatriks[i][j] = 0;
            }
        }

        data[0][0] = tinggi1;
        data[0][1] = diameter1;
        data[0][2] = umur;
        data[1][0] = tinggi2;
        data[1][1] = diameter2;
        data[1][2] = umur;
        data[2][0] = tinggi3;
        data[2][1] = diameter3;
        data[2][2] = umur;
        data[3][0] = tinggi4;
        data[3][1] = diameter4;
        data[3][2] = umur;
        data[4][0] = tinggi5;
        data[4][1] = diameter5;
        data[4][2] = umur;
        


        for (i = 0; i < jumlKriteria - 1; i++) {
            for (j = 0; j < jumlKriteria - 1; j++) {
                data[i][j]
            }
        }

        console.log("data")
        console.log(data);
        console.log("matriks perbandingan awal sebelum di input")
        console.log(matriksData);
        console.log("matriks kuadrat awal sebelum di input")
        console.log(kuadratmatriks);

        do{
            if(matriksData[0][0] == 0){
                matriksData[0][0] = 1;
                matriksData[0][1] = 0.33;
                matriksData[0][2] = 0.33;
                matriksData[1][0] = 3;
                matriksData[1][1] = 1;
                matriksData[1][2] = 0.5;
                matriksData[2][0] = 3;
                matriksData[2][1] = 2;
                matriksData[2][2] = 1;

            }else{
                matriksData[0][0] = kuadratmatriks[0][0];
                matriksData[0][1] = kuadratmatriks[0][1];
                matriksData[0][2] = kuadratmatriks[0][2];
                matriksData[1][0] = kuadratmatriks[1][0];
                matriksData[1][1] = kuadratmatriks[1][1];
                matriksData[1][2] = kuadratmatriks[1][2];
                matriksData[2][0] = kuadratmatriks[2][0];
                matriksData[2][1] = kuadratmatriks[2][1];
                matriksData[2][2] = kuadratmatriks[2][2];
            }

            for(i=0; i<=2; i++){
                for(j=0; j<=2; j++){
                    kuadratmatriks[i][j] = (matriksData[0][j] * matriksData[i][0]) + (matriksData[1][j] * matriksData[i][1]) + (matriksData[2][j] * matriksData[i][2]);
                    totalkuadratMatriks += kuadratmatriks[i][j];
                }
            }
            eigenVector[0] = (kuadratmatriks[0][0] + kuadratmatriks[0][1] + kuadratmatriks[0][2]) / totalkuadratMatriks
            eigenVector[1] = (kuadratmatriks[1][0] + kuadratmatriks[1][1] + kuadratmatriks[1][2]) / totalkuadratMatriks
            eigenVector[2] = (kuadratmatriks[2][0] + kuadratmatriks[2][1] + kuadratmatriks[2][2]) / totalkuadratMatriks

            if(eigenVectorSebelumnya[0]===eigenVector[0] && eigenVectorSebelumnya[1]===eigenVector[1] && eigenVectorSebelumnya[2]===eigenVector[2]){
                bSt = true
            }else{
                eigenVectorSebelumnya[0] = eigenVector[0]
                eigenVectorSebelumnya[1] = eigenVector[1]
                eigenVectorSebelumnya[2] = eigenVector[2]
            }
        }while(bSt != false);
        console.log("matriks perbandingan awal sesudah di input")
        console.log(matriksData);
        console.log("matriks kuadrat awal sesudah di input")
        console.log(kuadratmatriks);
        console.log("Nilai Eigen");
        console.log(eigenVector)

        const maksUmur = 50;
        const maksDiameter = 28;
        const maksTinggi = 20;

        let ahp = [];
        let stat = [];

        for(i=0; i<=jumlData-1; i++){
            ahp[i] = (data[i][0] / maksTinggi * eigenVector[0]) + (data[i][1] / maksDiameter) * eigenVector[1] + (data[i][2] / maksUmur) * eigenVector[2]
            if(ahp[i] < 0.6){
                stat[i] = "Kurang";
            }else if(ahp[i] < 0.7){
                stat[i] = "Cukup"
            }else if(ahp[i] < 0.8){
                stat[i] = "Baik"
            }else{
                stat[i] = "Sangat Baik"
            }
        }

        const tanaman = [{ahp : ahp[0], nama : "Tanaman 1"}, {ahp : ahp[1], nama : "Tanaman 2" }, {ahp : ahp[2], nama : "Tanaman 3"}, {ahp : ahp[3], nama : "Tanaman 4"}, {ahp : ahp[4], nama : "Tanaman 5"}];
        tanaman.sort((a,b) => b.ahp - a.ahp);

        console.log(tanaman)
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
    fungAHP();
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