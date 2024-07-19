import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackHandler, Alert} from 'react-native';
import {useEffect} from 'react';
import SignupScreen from './SignupScreen';
import Dashboard from './Staff/Dashboard';
import BottomNavigator from './Staff/navigator/BottomNavigator';
import LeadDetailsScreen from './LeadDetailsScreen';
import WorkHistoryScreen from './WorkHistoryScreen';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import FaceDetectionScreen from './FaceDetectionScreen';
import AdminBottomNavigator from './Admin/adminNavigator/AdminBottomNavigator';
import FormScreen from './Admin/FormScreen';
import AttandanceScreen from './AttandanceScreen';
import SignupScreenNextPage from './SignupScreenNextPage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

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
        <Stack.Screen
          name="AttandanceScreen"
          component={AttandanceScreen}
          options={{headerShown: false}}
        />
        {/* Admin Related Navigation  */}
        <Stack.Screen
          name="AdminBottomNavigator"
          component={AdminBottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreenNextPage"
          component={SignupScreenNextPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
