import React from 'react';
import {View, Image} from 'react-native';
import styles from './screenStyles/OnboardingStyes';

const OnboardingScreen = ({_navigation}) => {
  
  
  return (
    <View
      style={styles.container}>
      <Image
        source={require('../../assests/images/Medstick_1.png')}
        style={styles.img}
        resizeMode="contain"></Image>
    </View>
  );
};

export default OnboardingScreen;
