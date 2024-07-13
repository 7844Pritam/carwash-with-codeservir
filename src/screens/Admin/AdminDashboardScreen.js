import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import TopBar from '../../components/TopBar';
import ClientsCard from '../../components/ClientsCard.mjs';
import {useNavigation} from '@react-navigation/native';
import appColors from '../../assets/config/Appcolor';

const cardData = [
  {
    id: 1,
    name: 'Mohit',
    date: '12/12/12',
    time: '23:34',
    status: 'Active',
    mobNum: '1234567890',
    address: '123 Street, City',
    innerCleaning: '23 times',
    outerCleaning: '3434 times',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'John',
    date: '01/01/23',
    time: '10:00',
    status: 'Inactive',
    mobNum: '2345678901',
    address: '456 Avenue, City',
    innerCleaning: '45667 times',
    outerCleaning: '123 times',
    isAvailable: false,
  },
  {
    id: 3,
    name: 'Jane',
    date: '02/02/23',
    time: '11:30',
    status: 'Active',
    mobNum: '3456789012',
    address: '789 Boulevard, City',
    innerCleaning: '111 times',
    outerCleaning: '22222 times',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Doe',
    date: '03/03/23',
    time: '12:45',
    status: 'Inactive',
    mobNum: '4567890123',
    address: '101 Road, City',
    isAvailable: false,
  },
  {
    id: 5,
    name: 'Smith',
    date: '04/04/23',
    time: '14:15',
    status: 'Active',
    mobNum: '5678901234',
    address: '112 Highway, City',
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Alex',
    date: '05/05/23',
    time: '15:30',
    status: 'Inactive',
    mobNum: '6789012345',
    address: '131 Expressway, City',
    isAvailable: false,
  },
  {
    id: 7,
    name: 'Emma',
    date: '06/06/23',
    time: '16:45',
    status: 'Active',
    mobNum: '7890123456',
    address: '141 Parkway, City',
    isAvailable: true,
  },
  {
    id: 8,
    name: 'Liam',
    date: '07/07/23',
    time: '18:00',
    status: 'Inactive',
    mobNum: '8901234567',
    address: '151 Lane, City',
    isAvailable: false,
  },
];

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  const handleOnClickViewDetails = card => {
    console.log('View Details Clicked...', card.name);
    navigation.navigate('LeadDetailsScreen', {cards: card});
  };

  return (
    <View style={styles.container}>
      <TopBar heading={'Car Clean Plus'} />
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 16,
          marginTop: 8,
          marginBottom: 8,
        }}>
        <Text style={styles.textStyle}>Recent Leads</Text>
      </View>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.listContainer}>
          {cardData.map(card => (
            <ClientsCard
              key={card.id}
              name={card.name}
              date={card.date}
              time={card.time}
              status={card.status}
              isAvailable={card.isAvailable}
              mobNum={card.mobNum}
              address={card.address}
              onPress={() => {
                handleOnClickViewDetails(card);
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 120,
  },
  listContainer: {
    flex: 1,
    marginBottom: 120,
    marginHorizontal: '3%',
  },
  textStyle: {
    color: appColors.primary,
    fontSize: 20,
    marginRight: 10,
    fontWeight: '900',
  },
});

export default AdminDashboardScreen;
