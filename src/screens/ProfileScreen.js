import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import appColors from '../assets/config/Appcolor';
import TopBar from '../components/TopBar';
import {useNavigation} from '@react-navigation/native';
import cameraImage from '../assets/images/png/camera.png';
import dummyImage from '../assets/images/png/persion_dummy.png';
import gmailIcon from '../assets/images/png/gmail.png';
import personIcon from '../assets/images/png/person_fill.png';
import mobileIcon from '../assets/images/png/mobileIcon.png';
import workIcon from '../assets/images/png/workIcon.png';
import paymentIcon from '../assets/images/png/paymentIcon.png';
import CustomButton from '../components/CustomButton';
import auth from '@react-native-firebase/auth';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        Alert.alert('Logout Success', 'You have been logged out.');
        navigation.navigate('LoginScreen'); 
      })
      .catch(error => {
        Alert.alert('Logout Error', error.message);
      });
  };
  return (
    <View style={styles.container}>
      <TopBar heading={'Profile'} />
      <View style={styles.profileBox}>
        <View style={styles.imageContainer}>
          <Image source={dummyImage} style={styles.image} />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={cameraImage} style={styles.editIconImage} />
            <Text style={styles.editIconText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.separator} />
          <View style={styles.detailItem}>
            <Image source={personIcon} style={styles.detailIcon} />
            <Text style={styles.profileInfo}>Name: Software Engineer</Text>
          </View>
          <View style={styles.detailItem}>
            <Image source={gmailIcon} style={styles.detailIcon} />
            <Text style={styles.profileInfo}>Email: john.doe@example.com</Text>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <View style={styles.separator} />
          <View style={styles.detailItem}>
            <Image source={mobileIcon} style={styles.detailIcon} />
            <Text style={styles.profileInfo}>Mob Number: 34344344534</Text>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Others</Text>
          <View style={styles.separator} />
          <View style={styles.detailItem}>
            <Image source={paymentIcon} style={styles.detailIcon} />
            <Text style={styles.profileInfo}>Salary History</Text>
            <Text style={styles.linkText}>Click to View</Text>
          </View>
          <View style={styles.detailItem}>
            <Image source={workIcon} style={styles.detailIcon} />
            <Text style={styles.profileInfo}>Work History</Text>
            <Text style={styles.linkText}>Click to View</Text>
          </View>
        </View>

        <CustomButton
          onPress={handleLogout}
          stylesecond={styles.buttonsytle}
          title={'Logout'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsytle: {
    backgroundColor: appColors.secondary,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  profileBox: {
    padding: 16,
    marginHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: appColors.secondary,
    borderWidth: 2,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.secondary,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  editIconImage: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  editIconText: {
    color: appColors.primary,
    fontSize: 14,
  },
  detailsSection: {
    width: '100%',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appColors.secondary,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  profileInfo: {
    fontSize: 16,
    color: appColors.black,
  },
  linkText: {
    fontSize: 16,
    color: appColors.primary,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: appColors.secondary,
    width: '100%',
    marginVertical: 10,
  },
});

export default ProfileScreen;
