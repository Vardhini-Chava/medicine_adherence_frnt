import ProfileHeader from './ProfileHeader';
import {logger} from 'react-native-logs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, View} from 'react-native';
import {Signout} from './caretaker/allIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './componentStyles/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};

let log = logger.createLogger(defaultConfig);
const CustomHeader = props => {
   /* istanbul ignore next */
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  const [loggedin, loggedinstate] = React.useState(true);
  /* istanbul ignore next */
  async function getuser() {
    try {
      const isllooged = await GoogleSignin.isSignedIn();
      const checkforlogin = await AsyncStorage.getItem('user_id');

      log.info(isllooged);

      if (checkforlogin !== null) {
        log.info(isllooged);
        loggedinstate(true);
        return;
      }

      loggedinstate(false);
    } catch (err) {}
  } 
  /* istanbul ignore next */
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      getuser();
    });
  }, [props.navigation]);
  /* istanbul ignore next */
  useFocusEffect(() => { 
    log.info('f');
    getuser();
  });
  return (
    <><SafeAreaProvider>
      <DrawerContentScrollView style={styles.drawer}>
        <TouchableOpacity
          style={styles.touch}
          onPress={ /* istanbul ignore next */() => props.navigation.getParent().navigate('Profile')}>
          {<ProfileHeader></ProfileHeader>}
        </TouchableOpacity>
        <DrawerItemList {...props}></DrawerItemList>

        <View style={styles.top}>
          {!loggedin ? (
            <>
              <Button
                iconPosition="right"
                title="Sign up"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                onPress={async () => {/* istanbul ignore next */
                  props.navigation.navigate('Sign-up');
                }}
              />
              <Button
                iconPosition="right"
                title="Login"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                onPress={async () => { /* istanbul ignore next */
                  props.navigation.navigate('Login');
                }}
              />
            </>
          ) : (
            <Button
              title="Logout"
              iconPosition="right"
              icon={Signout()}
              buttonStyle={styles.button}
              titleStyle={styles.buttonLogOutTitle}
              containerStyle={styles.buttonContainer}
              onPress={async () => {/* istanbul ignore next */
                Alert.alert('Do you want to Logout?', '', [
                  {
                    text: 'Logout',
                    onPress: async () => {
                      await GoogleSignin.signOut();
                      await AsyncStorage.setItem('bio', '-');
                      await AsyncStorage.setItem('contact', '-');
                      await AsyncStorage.setItem('age', '-');
                      await AsyncStorage.setItem('weight', '-');
                      await AsyncStorage.setItem('gender', '-');
                      await AsyncStorage.setItem('maritalstatus', '-');
                      await AsyncStorage.setItem('bloodgroup', '-');
                      await AsyncStorage.setItem('user_id', '');
                      await AsyncStorage.setItem('user_name', '');
                      loggedinstate(false);
                    },
                  },
                  {
                    text: 'Cancel',
                    onPress: () => undefined,
                  },
                ]);
              }}></Button>
          )}
        </View>
      </DrawerContentScrollView>
      </SafeAreaProvider>
    </>
  );
};

export default CustomHeader;
