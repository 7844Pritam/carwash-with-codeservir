import React, { useEffect } from 'react';
import {View, StyleSheet, Image,Text, BackHandler, Alert} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../../ProfileScreen';
import SalaryScreen from '../../SalaryScreen';
import appColors from '../../../assets/config/Appcolor';
import LandingPage from '../LandingPage';
import ClientScreen from '../ClientScreen';
import StaffScreen from '../StaffScreen';

import staff_fill from '../../../assets/images/png/staffnew_fill.png';
import staff from '../../../assets/images/png/staffnew.png';

import client_fill from '../../../assets/images/png/client_fill_primary.png';
import client from '../../../assets/images/png/clientSecondary.png';

import person_fill from '../../../assets/images/png/person_fill.png';
import person from '../../../assets/images/png/person.png';


const Tab = createMaterialBottomTabNavigator();

function AdminBottomNavigator() {


  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Do you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#000"
        inactiveColor="#000"
        barStyle={styles.barStyle}>

        <Tab.Screen
          name="Home"
          component={LandingPage}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../../../assets/images/png/home_fill.png')
                    : require('../../../assets/images/png/home.png')
                }
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Client"
          component={ClientScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? client_fill
                    : client
                }
                style={styles.icon}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Staff"
          component={StaffScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? staff
                    : staff_fill
                }
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? person_fill
                    : person
                }
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    overflow: 'hidden',
  },
  barStyle: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {width: 0, height: 2},
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },

  icon: {
    width: 24,
    height: 24,
  },
});

export default AdminBottomNavigator;
