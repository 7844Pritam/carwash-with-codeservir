import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const AttandanceScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [calendarDates, setCalendarDates] = useState([]);

  const attendanceData = [
    { date: '2024-07-01', attended: true, data: 'Attended on 1st' },
    { date: '2024-07-02', attended: false, data: 'Missed on 2nd' },
    { date: '2024-07-03', attended: true, data: 'Attended on 3rd' },
    { date: '2024-07-04', attended: false, data: 'Missed on 4th' },
    // Add more dummy data here
  ];

  useEffect(() => {
    generateCalendarDates();
  }, []);

  const generateCalendarDates = () => {
    const dates = [];
    const date = new Date();
    date.setDate(1);

    const month = date.getMonth();
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setCalendarDates(dates);
  };

  const handleDatePress = (date) => {
    setSelectedDate(date.toDateString());
  };

  const filterDataByDate = () => {
    return attendanceData.filter(
      item => new Date(item.date).toDateString() === selectedDate
    );
  };

  const filteredData = filterDataByDate();

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        {calendarDates.map((date, index) => {
          const dateStr = date.toISOString().split('T')[0];
          const attendance = attendanceData.find(item => item.date === dateStr);
          const backgroundColor = attendance
            ? attendance.attended
              ? 'green'
              : 'red'
            : '#fff';

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateBox,
                { backgroundColor },
                selectedDate === date.toDateString() && styles.selectedDateBox,
              ]}
              onPress={() => handleDatePress(date)}
            >
              <Text style={styles.dateText}>{date.getDate()}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.data}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dateBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedDateBox: {
    borderColor: 'orange',
    borderWidth: 2,
  },
  dateText: {
    fontSize: 16,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AttandanceScreen;
