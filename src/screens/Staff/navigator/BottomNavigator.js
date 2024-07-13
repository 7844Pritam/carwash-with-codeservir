import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Dashboard';
import ProfileScreen from '../../ProfileScreen';
import SalaryScreen from '../../SalaryScreen';
import appColors from '../../../assets/config/Appcolor';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#000"
        inactiveColor="#000"
        barStyle={styles.barStyle}>
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/images/png/home_fill.png') : require('../../../assets/images/png/home.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Salary" 
          component={SalaryScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/images/png/orders_fill.png') : require('../../../assets/images/png/orders.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/images/png/person_fill.png') : require('../../../assets/images/png/persion.png')}
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
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
    borderWidth:0.5,
    borderColor:'rgba(0, 0, 0, 0.3)'
  },
  
  icon: {
    width: 24,
    height: 24,
  }
});

export default BottomNavigator;
