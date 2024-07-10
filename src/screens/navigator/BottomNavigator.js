import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Dashboard';
import OrdersScreen from '../OrdersScreen';
import ProfileScreen from '../ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#000"
        inactiveColor="#000"
        barStyle={styles.barStyle}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  barStyle: {
   
  }
});

export default BottomNavigator;
