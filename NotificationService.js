import PushNotification, {Importance} from 'react-native-push-notification';
import NotificationHandler from './NotificationHandler';
import { Component, useState } from 'react';
import database from '@react-native-firebase/database'

export default class NotifService extends Component{
  constructor(props) {
    super(props);
    this.lastId = 0;
    this.lastChannelCounter = 0;
    this.state = {
      PH:0,
      TDS:0,
      suhu:0,
      diameter1: 0,
      diameter2: 0,
      diameter3: 0,
      diameter4: 0,
      diameter5: 0,
      tinggi1: 0,
      tinggi2: 0,
      tinggi3: 0,
      tinggi4: 0,
      tinggi5: 0,
      Umur: 30, //#hari
  }

    this.createDefaultChannels();

    const[onRegister, onNotification] = useState();
    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);

    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
    
    PushNotification.getChannels(function(channels) {
      console.log(channels);
    });
  }

   async componentDidMount() {
        try {
            await this.Suhu();
            await this.Tinggi1();
            await this.Tinggi2();
            await this.Tinggi3();
            await this.Tinggi4();
            await this.Tinggi5();
            await this.Diameter1();
            await this.Diameter2();
            await this.Diameter3();
            await this.Diameter4();
            await this.Diameter5();
        } catch (error) {

        }


    }
    componentDidUpdate() {
        console.log("masuk update")
        if (this.state.diameter1 != 0 && this.state.diameter2 != 0 && this.state.diameter3 != 0 && this.state.diameter4 != 0 && this.state.diameter5 != 0) {
            console.log("masuk ahp")
            this.fungAHP();
        }

    }

    async Suhu() {

        database()
            .ref('/Hasil_Pembacaan/Temperature')
            .on('value', snapshot => {

                this.setState({
                    suhu: snapshot.val()
                })
            });
    }

    async Tinggi1() {

        database()
            .ref('/Hasil_Pembacaan/Tanaman1/Tinggi1')
            .on('value', snapshot => {

                this.setState({
                    tinggi1: snapshot.val()
                })
            });
    }

    async Tinggi2() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman2/Tinggi2')
            .on('value', snapshot => {

                this.setState({
                    tinggi2: snapshot.val()
                })
            });
    }

    async Tinggi3() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman3/Tinggi3')
            .on('value', snapshot => {

                this.setState({
                    tinggi3: snapshot.val()
                })
            });
    }

    async Tinggi4() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman4/Tinggi4')
            .on('value', snapshot => {

                this.setState({
                    tinggi4: snapshot.val()
                })
            });
    }

    async Tinggi5() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman5/Tinggi5')
            .on('value', snapshot => {

                this.setState({
                    tinggi5: snapshot.val()
                })
            });
    }

    async Diameter1() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
            .on('value', snapshot => {

                this.setState({
                    diameter1: snapshot.val()
                })
            });
    }

    async Diameter2() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman2/Diameter2')
            .on('value', snapshot => {

                this.setState({
                    diameter2: snapshot.val()
                })
            });
    }

    async Diameter3() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman3/Diameter3')
            .on('value', snapshot => {

                this.setState({
                    diameter3: snapshot.val()
                })
            });
    }

    async Diameter4() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman4/Diameter4')
            .on('value', snapshot => {

                this.setState({
                    diameter4: snapshot.val()
                })
            });
    }

    async Diameter5() {
        database()
            .ref('/Hasil_Pembacaan/Tanaman5/Diameter5')
            .on('value', snapshot => {

                this.setState({
                    diameter5: snapshot.val()
                })
            });
    }


  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: "default-channel-id", // (required)
        channelName: `Default channel`, // (required)
        channelDescription: "A default channel", // (optional) default: undefined.
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.createChannel(
      {
        channelId: "sound-channel-id", // (required)
        channelName: `Sound channel`, // (required)
        channelDescription: "A sound channel", // (optional) default: undefined.
        soundName: "sample.mp3", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel 'sound-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  createOrUpdateChannel() {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: "custom-channel-id", // (required)
        channelName: `Custom channel - Counter: ${this.lastChannelCounter}`, // (required)
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`, // (optional) default: undefined.
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  popInitialNotification() {
    PushNotification.popInitialNotification((notification) => console.log('InitialNotication:', notification));
  }

  localNotifSUHU(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'Suhu telah meningkat diatas rata-rata, lakukan tindakan untuk menurunkan suhu', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Suhu Ruangan Hidroponik', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }
  
  localNotifPH(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  localNotifTDS(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  localNotifSuhuPH(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  localNotifSuhuTDS(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'Suhu ruangan meningkat dan Nutrisi dalam air kurang. Lakukan tindakan untuk menurunkan suhu dan menambahkan nutrisi dalam tanaman', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Suhu Ruangan dan Nutrisi Air', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  localNotifpHTDS(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  localNotifSuhuPhTDS(soundName) {
    // console.log(this.state.suhu)
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: "My Notification Subtitle", // (optional) smaller title below notification title

      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  scheduleNotif(soundName) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(Date.now() + 30 * 1000), // in 30 secs

      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My <strong>big text</strong> that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'blue', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: false, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
    
      /* iOS only properties */
      category: '', // (optional) default: empty string
      
      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Scheduled Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { sceen: "home" }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  requestPermissions() {
    return PushNotification.requestPermissions();
  }

  cancelNotif() {
    PushNotification.cancelLocalNotification(this.lastId);
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  abandonPermissions() {
    PushNotification.abandonPermissions();
  }

  getScheduledLocalNotifications(callback) {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  getDeliveredNotifications(callback) {
    PushNotification.getDeliveredNotifications(callback);
  }
}