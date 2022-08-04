import React from 'react';
import {View, FlatList, Image, RefreshControl} from 'react-native';
import {Card} from 'react-native-paper';
import {logger} from 'react-native-logs';
import {Avatar, ListItem, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../repositories/var';
import {useFocusEffect} from '@react-navigation/native';
import styles from './patientStyles/PatientRequestStyles';

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
let Patientrequest = () => {
  const [patients, patientsdata] = React.useState([]);
  const [refresh, refeereshstate] = React.useState(false);
  const fetchpatientreq = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    fetch(`${API_URL}/api/v1/patient/requests?userId=${user_id}`)
      .then(res => res.json())
      .then(resp => {
        log.info(resp);
        if (resp.status === 'failed') {
          patientsdata([]);
          refeereshstate(false);
          return;
        }
        patientsdata(resp.userCaretakerList);
      })
      .catch(() => {
        refeereshstate(false);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchpatientreq();

      return () => {
        /* do nothing */
      };
    }, []),
  );
  const acceptrequest = (ci_id: string) => {
    let url: any = new URL(`${API_URL}/api/v1/accept`);
    url.searchParams.append('cId', ci_id);

    fetch(url, {method: 'PUT'})
      .then(res => {
        log.info(res);
        fetchpatientreq();
      })
      .catch(err => log.error(err));
  };
  const deletereq = (ci_id: string) => {
    let url: any = new URL(`${API_URL}/api/v1/delete`);
    url.searchParams.append('cId', ci_id);

    fetch(url)
      .then(res => {
        log.info(res);
        fetchpatientreq();
      })
      .catch(err => log.error(err));
  };
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatientreq}></RefreshControl>
        }
        data={patients}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <View style={styles.cardInner}>
              <View style={styles.avatar}>
                <Avatar
                  size={100}
                  rounded
                  source={{
                    uri: 'https://lh3.googleusercontent.com/a-/AOh14GgrRBm3gFrvPSRlLYSiaY5KO-HpPKl1IhK3Z3rePg=s96-c',
                  }}></Avatar>
              </View>
              <View style={styles.container1}>
                <ListItem
                  style={styles.list}
                  hasTVPreferredFocus={undefined}
                  tvParallaxProperties={undefined}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>
                      {item.patientName}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.listSubTitle}>
                      {' Sent on : ' + item.createdAt}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
                <View style={styles.buttonView}>
                  <Button
                    onPress={() => {
                      acceptrequest(item.cid);
                    }}
                    title="Confirm"
                    buttonStyle={styles.confirmButton}
                    ></Button>
                  <View style={styles.space} />
                  <Button
                    onPress={() => {
                      deletereq(item.cid);
                    }}
                    title="Delete"
                    buttonStyle={styles.deleteButton}
                  ></Button>
                </View>
              </View>
            </View>
          </Card>
        )}></FlatList>
      {patients.length === 0 && (
        <View style={styles.imgView}>
          <Image
            source={require('../../../assests/images/nopatientreq.png')}
            style={styles.img}
            resizeMode="contain"></Image>
        </View>
      )}
    </View>
  );
};

export default Patientrequest;
