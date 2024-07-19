import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import appColors from '../assets/config/Appcolor';

const ClientsCard = ({name,date,time, status, isAvailable, mobNum, address,onPress}) => {

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <View style={{backgroundColor:appColors.white,height:32,width:32,borderRadius:60,alignContent:'center',alignItems:'center'}}>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.dateTime}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.middleSection}>
        <View style={styles.infoColumn}>
          <View style={styles.infoRow}>
            <Image source={require('../assets/images/logo2.png')} style={styles.icon} />
            <Text style={{color:'white'}}>Car Availability</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={require('../assets/images/logo2.png')} style={styles.icon} />
            <Text style={{color:'white'}}>{mobNum}</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={require('../assets/images/logo2.png')} style={styles.icon} />
            <Text style={{color:'white'}}>{address}</Text>
          </View>
        </View>
        <View style={styles.availability}>
          <Text style={status==='Pending' ? styles.available : styles.notAvailable}>
            {status}
          </Text>
        </View>
      </View>

      <View style={styles.buttonSeparator} />

      <View style={styles.bottomSection}>
        <CustomButton onPress={onPress} title={'View Details'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: appColors.secondary,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  status: {
    backgroundColor: 'green',
    borderRadius: 35,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  statusText: {
    color: '#fff',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

  },
  dateTime: {
    alignItems: 'flex-end',
    
  },
  date: {
    color: '#fff',

    
  },
  time: {
    color: '#fff',
    
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
  },
  middleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  infoColumn: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  availability: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    paddingHorizontal:16,
    paddingVertical:4,
    borderRadius:20,
  },
  available: {
    color: 'green',
    fontWeight: 'bold',
    fontSize:10,
  },
  notAvailable: {
    color: 'red',
    fontWeight: 'bold',
    fontSize:10
  },
  buttonSeparator: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginBottom: -10,
  },
  bottomSection: {
    alignItems: 'center',
  },
});

export default ClientsCard;
