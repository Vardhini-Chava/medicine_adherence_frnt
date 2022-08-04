import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Animated, StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Addmedicine from './AddMedicine';
import styles from './screenStyles/HomeScreenStyles';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator(); 

const HomeScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    
<View style={styles.container}>
<NavigationContainer>
      <StatusBar backgroundColor="#3743ab" />

      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {height: 60},
          tabBarInactiveTintColor: '#555',
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: '#e3f2fd',
          tabBarActiveTintColor: '#bbdefb',
          tabBarLabelStyle: {
            fontSize: 16,
            color: 'black',
          },
        })}>
        <Tab.Screen
          name="Report"
          key={1}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={styles.report}
                speed={0.8}
                source={require('../../assets/animate/heart.json')}
                progress={progress}
              />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Medicine"
          key={2}
          options={{
            headerShown: false,
            
            tabBarIcon: () => (
              <LottieView
                style={styles.medicine}
                source={require('../../assets/animate/med2.json')}
                progress={progress}
              />
            ),
          }}
          component={Addmedicine}
        />
        <Tab.Screen
          name="Profile"
          key={2}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={styles.profile}
                source={require('../../assets/animate/profile.json')}
                progress={progress}
              />
            ),
          }}
          component={HomeScreen}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
    
    
  );
};

export default HomeScreen;
