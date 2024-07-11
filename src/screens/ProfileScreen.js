import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import appColors from '../assets/config/Appcolor';
import TopBar from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>

     <TopBar heading={'Profile'}/>
     
      <View style={styles.rectangleContainerUp}></View>
      <View style={styles.profileBox}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.image}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileInfo}>Software Engineer</Text>
        <Text style={styles.profileInfo}>john.doe@example.com</Text>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WorkHistoryScreen')}>
            <Text style={styles.buttonText}>Salary History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WorkHistoryScreen')}>
            <Text style={styles.buttonText}>Work History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rectangleContainerDown}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileBox: {
    width: '95%',
    height: 550,
    borderWidth: 1,
    backgroundColor: appColors.primary,
    borderColor: appColors.white,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop:20
  },
  rectangleContainerUp: {
    backgroundColor: appColors.secondary,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: -1000,
  },
  rectangleContainerDown: {
    backgroundColor: appColors.secondary,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: -1000,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderColor: appColors.white,
    borderWidth: 1,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.white,
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 16,
    color: appColors.white,
    marginBottom: 5,
  },
  buttonBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: appColors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
