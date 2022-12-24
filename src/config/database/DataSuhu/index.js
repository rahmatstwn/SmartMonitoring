import database from '@react-native-firebase/database'

database()
  .ref('/Hasil_Pembacaan/Temperature')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });
