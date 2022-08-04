import {View, Image, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import {Avatar, ListItem} from 'react-native-elements';
import {Card} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect} from '@react-navigation/native';
import globalDb from '../repositories/database/globalDb';
import styles from './screenStyles/AddMedicineStyles';
import {logger} from 'react-native-logs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';

const db = globalDb();

interface Props {
  navigation: any;
}
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
let Reducerfun = (state: any, action: any) => {
  return {...state, data: action.payload};
};

let initialVal = {data: []};
const Addmedicine = ({navigation}: Props) => {
  const [medicines, characterstate] = useReducer(Reducerfun, initialVal);
  useFocusEffect(
    React.useCallback(() => {
  }, []),
  );

  const checkformeds = async () => {
    return new Promise(function (resolve) {
      let meds_array: any[] = [];

      db.transaction(async function (txn) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER, total_med_reminders INTEGER , current_count INTEGER)',
          [],
        );

        txn.executeSql(
          'SELECT * FROM `User_medicines`',
          [],
        );
      });
    });
  };

const renderitem: React.FC = ({item, index}: any) => {
    return (
      <Animatable.View animation="zoomInUp" duration={400} delay={index * 180}>
        <Card style={styles.card}>
          <View style={styles.listView}>
            
              <ListItem.Content>
                <View style={styles.avatarView}>
                  <Avatar
                    rounded
                    size={50}
                    source={require('../../assets/images/meddis.png')}
                  />
                  <View style={styles.medNameView}>
                    <ListItem.Title style={styles.medName}>
                      {item.medicine_name}
                    </ListItem.Title>
                    <ListItem.Subtitle>{item.medicine_des}</ListItem.Subtitle>
                  </View>
                </View>
              </ListItem.Content>

<TouchableOpacity
testID='addRem'
                style={styles.rem}>
                <AntIcon
                  testID='remIcon'
                  name="clockcircle"
                  color={item.status === 0 ? '#3743ab' : '#4dd0e1'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity
                testID='deleteMed'
                >
                <Icon testID='delIcon' name="trash" color="#3743ab" size={24} />
              </TouchableOpacity>
            
          </View>
        </Card>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      {medicines.data.length === 0 ? (
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/images/nomeds.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
      ) :navigation}

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.addButtonTouch}
          testID='addMedButton'>
          <LottieView
            source={require('../../assets/animate/addicon.json')}
            autoPlay
            loop
            speed={2}
            style={styles.addLottie}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addmedicine;
