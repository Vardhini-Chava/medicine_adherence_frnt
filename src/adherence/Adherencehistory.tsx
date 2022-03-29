import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet, FlatList} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Picker} from '@react-native-picker/picker';
import {Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import Allreminderdata from './Allreminderdata';

interface singledate{
not_taken:[],
taken:[]
}

const Reminders: React.FC = ({item}) => {
  console.log(item)
  
  return (
    <>
      <View
        style={{
          padding: 4,
          marginBottom: 15,
        }}>
        <Card style={styles.dateday}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Date - {item.date}</Text>
          </View>
        </Card>
      </View>
      {
        item.key.not_taken.map((nti:any)=>{
          return(
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>{nti}</Text>
            <Text style={{color: 'red'}}> Not Taken</Text>
          </View>
          )
        })
       
      }
      {
        item.key.taken.map((tti:any)=>{
          return(
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>{tti}</Text>
        <Text style={{color: 'green'}}> Taken</Text>
        </View>
          )
        })
      }
      
    </>
  );
};

const MyComponent: React.FC = () => {

  const [selectedMedicine, setSelectedMedicine] = React.useState();
  const [pickerValue, setPickerValue] = React.useState<String>('');
  const [allreminders, reminders_state] = React.useState<[]>([]);
  const [filteredreminders, filterreminderstate] = React.useState<[]>([]);
  const [reminder_map_fetched_data , reminder_map_fetched_data_state] = React.useState<[]>([]);

  const fetchreminders = async (db: any) => {
    const reminder_array: any = [];

    await db.transaction(async function (txn: any) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );

      txn.executeSql(
        'SELECT * FROM `User_medicines`',
        [],
        function (tx: any, res: any) {
          for (let i = 0; i < res.rows.length; ++i) {
            // meds_array.push(res.rows.item(i));
            console.log(res.rows.item(i));
            reminder_array.push(res.rows.item(i));
          }
          reminders_state(reminder_array);
        },
      );
    });
  };

  const remindersofparticular_medicine = async (med_name: any) => {
    console.log(med_name);
   const output_map =   await Allreminderdata(med_name);
   console.log('out' , output_map)
   let f_array = [];
   for(let [key , value] of output_map.entries()){
     console.log(key,value)
     let arr = {date:key,key:{taken:[],not_taken:[]}};
     arr.key.taken  = value.taken;
     arr.key.not_taken = value.not_taken;
     f_array.push(arr)
   }
  //  output_map.forEach((it:any)=>{
  //    arr[it].taken = it.taken;
  //    arr[it].not_taken = it.not_taken
  //  })
   
   reminder_map_fetched_data_state(f_array);

  };

  useFocusEffect(
    React.useCallback(() => {
      const db = SQLite.openDatabase(
        {
          name: 'MedRemdb',
          location: 'default',
        },
        () => {
          console.log('opened');
        },
        (error: any) => {
          console.log(error);
        },
      );
      let isActive = true;
      fetchreminders(db);
      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{width: '100%', borderColor: 'lightgrey', borderEndWidth: 1}}>
          <Picker
            mode="dropdown"
            style={{
              backgroundColor: 'white',
              borderColor: 'lightgrey',
              borderWidth: 3,
              color: 'black',
              elevation: 3,
            }}
            selectedValue={pickerValue}
            onValueChange={itemValue => {
              setPickerValue(itemValue);
              remindersofparticular_medicine(itemValue);
            }}>
            {allreminders.map((it: any) => {
              return (
                <Picker.Item
                  label={it.medicine_name}
                  value={it.medicine_name}
                />
              );
            })}
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <View style={{left: 10}}>
          <Text style={{color: 'black', fontSize: 18, marginTop: 30}}>
            Overall Performance{' '}
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingRight: 20, margin: 10}}>
          <ProgressCircle
            percent={30}
            radius={35}
            borderWidth={3}
            color="#4dd0e1"
            bgColor="#fff">
            <Text style={{fontSize: 18, color: '#4dd0e1'}}>{'30%'}</Text>
          </ProgressCircle>
        </View>
      </View>
      <Divider />
      <View
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}> Detailed Report</Text>
      </View>
    {
      <FlatList data={reminder_map_fetched_data} renderItem={Reminders}></FlatList>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  timeright: {
    flexDirection: 'column',
    width: '46%',
    padding: 10,
    paddingLeft: 15,
    marginRight: 10,
  },
  timeleft: {
    flexDirection: 'column',
    width: '46%',
    padding: 10,
    paddingLeft: 25,
  },
  dateday: {
    borderRadius: 25,
    elevation: 2,
    padding: 10,
    paddingLeft: 20,
  },
});

export default MyComponent;