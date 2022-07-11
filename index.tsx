import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {name as appName} from './app.json';
import {
  PlaySound,
  Pushnotificationforeground,
} from './src/alarm/common/Pushnotificationconfig';

PushNotification.configure({
  onAction: function (notification: any) {
    if (notification.action === 'Open app to mark') {
      PushNotification.invokeApp(notification);
    }
  },

  onRegistrationError: function (err: any) {
    console.error(err.message, err);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
});

messaging().onMessage(async mssg => {
  Pushnotificationforeground(mssg);
});

messaging().onNotificationOpenedApp((mss: any) => {
  if (mss.notification.title === 'caretaker') {
    Pushnotificationforeground(mss);
  } else if (mss.notification.title === 'request') {
    Pushnotificationforeground(mss);
  } else {
    PlaySound();
    Pushnotificationforeground(mss);
  }
});

messaging()
  .getInitialNotification()
  
function sethandler() {
  messaging().setBackgroundMessageHandler(async (remoteMessage: any) => {
    if (remoteMessage.notification.title === 'caretaker') {
      Pushnotificationforeground(remoteMessage);
    } else if (remoteMessage.notification.title === 'request') {
      Pushnotificationforeground(remoteMessage);
    } else {
      PlaySound();
      Pushnotificationforeground(remoteMessage);
    }
  });
  return Promise.resolve();
}
AppRegistry.registerHeadlessTask(
  'com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService',
  () => sethandler,
);
AppRegistry.registerComponent(appName, () => App);
