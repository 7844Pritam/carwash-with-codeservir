import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import appColors from '../assets/config/Appcolor';
import TopBar from '../components/TopBar';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const WorkHistoryScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rectangleContainerUp}></View>
      <View style={styles.rectangleContainerDown}></View>
      <Button style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={{color: appColors.white}}>Back</Text>
      </Button>
      <View style={styles.totalDaysContainer}>
        <Text style={styles.totalDaysText}>Total days work</Text>
        <Text style={styles.totalDaysNumber}>47 days</Text>
      </View>
      <View style={styles.filterButtons}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Yearly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Weekly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.attendanceButtons}>
        <TouchableOpacity style={styles.attendanceButton}>
          <Text style={styles.attendanceButtonText}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.attendanceButton}>
          <Text style={styles.attendanceButtonText}>Absent</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.workList}
        contentContainerStyle={styles.workListContent}>
        {Array(6)
          .fill('')
          .map((_, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.workDate}>Sun, 24 Jun</Text>
              <View style={styles.workDetails}>
                <Text style={styles.workDuration}>24h 20min</Text>
                <TouchableOpacity>
                  <Text style={styles.viewDetails}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  rectangleContainerUp: {
    backgroundColor: appColors.secondary,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: -1000,
  },
  rectangleContainerDown: {
    backgroundColor: appColors.primary,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 460,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: -1000,
  },
  button: {
    backgroundColor: appColors.primary,
    width: 100,
    margin: 20,
    marginBottom:-10
  },
  totalDaysContainer: {
    backgroundColor: appColors.primary,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  totalDaysText: {
    color: appColors.white,
    fontSize: 18,
  },
  totalDaysNumber: {
    color: appColors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: appColors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  filterButtonText: {
    color: appColors.white,
    fontSize: 16,
  },
  attendanceButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  attendanceButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: appColors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  attendanceButtonText: {
    color: appColors.white,
    fontSize: 16,
  },
  workList: {
    flex: 1,
    marginHorizontal: 20,
  },
  workListContent: {
    paddingBottom: 20,
  },
  workItem: {
    backgroundColor: appColors.secondary,
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:10,
  },
  workDate: {
    color: appColors.white,
    fontSize: 16,
    marginBottom: 10,
  },
  workDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workDuration: {
    color: appColors.white,
    fontSize: 16,
  },
  viewDetails: {
    color: appColors.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default WorkHistoryScreen;
