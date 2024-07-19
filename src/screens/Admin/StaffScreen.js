import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import img from '../../assets/images/png/home.png';
import appColors from '../../assets/config/Appcolor';
import TopBar from '../../components/TopBar';
import { useNavigation } from '@react-navigation/native';

const data = [
  {id: '1', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '2', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '3', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '4', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '5', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '6', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '7', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '8', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '9', name: 'John Dube', userId: '34', position: 'Position'},
  {id: '10', name: 'John Dube', userId: '34', position: 'Position'},
];

const StaffScreen = () => {

  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image style={styles.avatar} source={img} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>User Id: {item.userId}</Text>
          <Text style={styles.details}>{item.position}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <TopBar heading={"Staff's"} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity onPress={()=>navigation.navigate("AttandanceScreen")}  style={styles.attendanceButton}>
        <Text style={styles.attendanceText}>ATTENDANCE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4F8',
  },
  header: {
    height: 60,
    backgroundColor: appColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: appColors.primary,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: '#d3e0ea',
    fontSize: 12,
  },
  attendanceButton: {
    backgroundColor: appColors.secondary,

    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  attendanceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#005f73',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default StaffScreen;
