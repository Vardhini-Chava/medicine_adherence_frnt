import PushNotification from 'react-native-push-notification';
import Logger from '../logger';

let Sound = require('react-native-sound');

function PlaySound() {
  Sound.setCategory('Alarm');
  var whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      return;
    }
    whoosh.setNumberOfLoops(0);
    whoosh.play((success) => {
      if (success) {
        Logger.loggerInfo('successfully finished playing');
      }
    });
  });
}

function Pushnotificationforeground(mssg) {
  let body;
  let big_picure_url = '';
  if (mssg.notification === 'caretaker') {
    big_picure_url = mssg.notification.android.imageUrl;
    body = mssg.notification;
    generatenotificationforcaretaker(mssg, body, big_picure_url);
  } else if (mssg.notification === 'request') {
    body = mssg.notification;
    generatenotificationforcaretaker(mssg, body, big_picure_url);
  } else {
    body = mssg.notification;
    generatenotificationforpatient(mssg, body);
  }
}

const generatenotificationforpatient = (mssg, body) => {
  let num = Math.floor(Math.random() * 90000) + 10000;
  PushNotification({
    title: mssg.notification,
    message: body,
    subText: '',
    id: num.toString(),
    color: '#3743ab',
    showWhen: true,
    visibility: 'public',
    usesChronometer: true,
    date: new Date(Date.now() + 500), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    vibrate: true,
    playSound: true,
    group: 'Patient Channel',
    soundName: 'android.resource://com.project/raw/my_sound.mp3',

    smallIcon: 'android.resource://com.project/raw/icon.png',

    actions: ['Notify Caretaker'],
  });
};

const generatenotificationforcaretaker = (
  mssg,
  body,
  big_picure_url,
) => {
  var num = Math.floor(Math.random() * 90000) + 10000;

  PushNotification.createChannel(
    {
      channelId: num.toString(),
      channelName: 'Caretaker Channel',
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      vibrate: true,
    },
    created => Logger.loggerInfo(`createChannel returned '${created}'`),
  );
  PushNotification({
    title: mssg.notification.title,
    message: body,
    subText: '',
    id: num.toString(),
    color: '#3743ab',
    showWhen: true,
    visibility: 'public',
    usesChronometer: true,
    date: new Date(Date.now() + 500),
    allowWhileIdle: true,
    vibrate: true,
    playSound: true,
    bigPictureUrl: big_picure_url,
    bigLargeIcon: big_picure_url,
    bigLargeIconUrl: big_picure_url,
    soundName: 'android.resource://com.project/raw/my_sound.mp3',
    group: 'Caretaker',
    smallIcon: 'ic_launcher',
  });
};

export {PlaySound, Pushnotificationforeground};
