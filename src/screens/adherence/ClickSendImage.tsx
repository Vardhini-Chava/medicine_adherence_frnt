import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {logger} from 'react-native-logs';
import {TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './adherenceStyles/ClickSendImageStyles';
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
let log = logger.createLogger(defaultConfig);
const CameraScreen = ({_navigation}) => {
  const [{cameraRef}] = useCamera(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}></RNCamera>

        <TouchableOpacity
          style={styles.image}>
          <LottieView
            style={styles.lottieAnimation}
            source={require('../../../assests/animate/camera1.json')}
            autoPlay
            loop></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;