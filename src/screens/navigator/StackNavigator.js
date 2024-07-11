import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
import FaceDetectionScreen from '../FaceDetectionScreen';
import Dashboard from '../Dashboard';
import BottomNavigator from './BottomNavigator';
import LeadDetailsScreen from '../LeadDetailsScreen';
import WorkHistoryScreen from '../WorkHistoryScreen';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FaceDetectionScreen"
          component={FaceDetectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
  
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeadDetailsScreen"
          component={LeadDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WorkHistoryScreen"
          component={WorkHistoryScreen}
          options={{headerShown: false}}
        />
  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
