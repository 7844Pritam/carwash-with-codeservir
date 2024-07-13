// AttendanceScreen.js

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import appColors from '../assets/config/Appcolor';
import TopBar from '../components/TopBar';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const attendanceData = [
  {
    id: 1,
    name: 'John Dube',
    userId: '34',
    position: 'Position',
    date: '2023-07-01',
    status: 'On Time',
  },
  {
    id: 2,
    name: 'John Dube',
    userId: '34',
    position: 'Position',
    date: '2023-07-02',
    status: 'On Time',
  },
  {
    id: 3,
    name: 'John Dube',
    userId: '34',
    position: 'Position',
    date: '2023-07-04',
    status: 'Late',
  },
  // Add more records as needed
];

const AttendanceScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateRange, setDateRange] = useState({
    present: 11,
    absent: 4,
    total: 15,
  });
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const processAttendanceData = () => {
      const dates = {};
      attendanceData.forEach(record => {
        const color = record.status === 'On Time' ? 'green' : 'red';
        dates[record.date] = {
          customStyles: {
            container: {
              backgroundColor: color,
            },
            text: {
              color: 'white',
              fontWeight: 'bold',
            },
          },
        };
      });
      setMarkedDates(dates);
    };

    processAttendanceData();
  }, []);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
  };

  const attendanceDatas = {
    '2024-07-01': true,
    '2024-07-02': false,
    '2024-07-03': true,
    // ...other dates
  };

  const getMarkedDates = () => {
    const markedDates = {};
    Object.keys(attendanceDatas).forEach(date => {
      markedDates[date] = {
        marked: true,
        dotColor: attendanceDatas[date] ? 'green' : 'red',
      };
    });
    if (selectedDate) {
      markedDates[selectedDate] = {
        ...markedDates[selectedDate],
        selected: true,
        selectedColor: appColors.primary,
      };
    }
    return markedDates;
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Button style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={{color: appColors.white}}>Back</Text>
        </Button>
      </View>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.dateRange}>Date Range: {dateRange.total} days</Text>
        <Text style={styles.present}>Present: {dateRange.present}</Text>
        <Text style={styles.absent}>Absent: {dateRange.absent}</Text>
      </View>
      <ScrollView style={styles.attendanceList}>
        {attendanceData.map(record => (
          <View key={record.id} style={styles.recordContainer}>
            <View style={styles.recordHeader}>
              <View style={styles.nameStatusContainer}>
                <Text style={styles.recordName}>{record.name}</Text>
                <Text
                  style={
                    record.status === 'On Time' ? styles.onTime : styles.late
                  }>
                  {record.status}
                </Text>
              </View>
              <Text style={styles.recordDetails}>User Id: {record.userId}</Text>
              <Text style={styles.recordDetails}>
                Position: {record.position}
              </Text>
            </View>
            <View style={styles.recordTimes}>
              <Text style={styles.inTime}>In Time: {record.inTime}</Text>
              <Text style={styles.outTime}>Out Time: {record.outTime}</Text>
            </View>
            <View style={{backgroundColor:appColors.secondary,height:1}}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderRadius: 10,
    // backgroundColor: appColors.primary,
    borderWidth:1,
    borderColor:appColors.primary,

    padding: 10,
    marginHorizontal: 5,
  },
  dateRange: {
    fontSize: 16,
  },
  present: {
    fontSize: 16,
    color: 'green',
  },
  absent: {
    fontSize: 16,
    color: 'red',
  },
  attendanceList: {
    flex: 1,
  },
  recordContainer: {
    borderColor:appColors.secondary,
  
    padding: 10,
    marginVertical: 5,
  
  },
  recordHeader: {
    marginBottom: 5,
  },
  recordName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recordDetails: {
    fontSize: 14,
  },
  recordTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inTime: {
    fontSize: 14,
    color: appColors.secondary,
  },
  outTime: {
    fontSize: 14,
    color: appColors.secondary,
  },
  onTime: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  late: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  button: {
    backgroundColor: appColors.primary,
    width: 100,
    margin: 20,
    marginBottom:1
  },
});

export default AttendanceScreen;
