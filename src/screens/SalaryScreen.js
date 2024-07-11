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
import {Image} from 'react-native';

const SalaryScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar heading={'Salary History'} />

      <View style={styles.rectangleContainerUp}></View>

      <View style={styles.Box}>
        <View style={styles.earningsContainer}>
         
          <View style={styles.earningsBox}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/images/logo2.png')}
            />
          </View>
            <Text style={styles.earningsText}>Jan to Dec</Text>
            <Text style={styles.totalEarningsText}>$ 7676</Text>
            <Text style={styles.totalEarningsLabel}>Total Earning</Text>
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
        </View>

        <ScrollView
          style={styles.earningsList}
          contentContainerStyle={styles.earningsListContent}>
          {Array(6)
            .fill('')
            .map((_, index) => (
              <View key={index} style={styles.earningItem}>
                <Text style={styles.earningDate}>Sun, 24 Jun</Text>
                <Text style={styles.earningAmount}>$ 123</Text>
                <Text style={styles.earningTime}>24h 20min</Text>
              </View>
            ))}
        </ScrollView>
      </View>

      <View style={styles.rectangleContainerDown}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.background,
  },
  Box: {
    flex:1,
    width: '95%',
    height:1000,
    borderWidth: 1,
    backgroundColor: appColors.primary,
    borderColor: appColors.white,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    marginTop: 20,

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
  earningsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 50,
    // backgroundColor:'red'
  },
  earningsBox: {
    backgroundColor: appColors.secondary,
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  earningsText: {
    fontSize: 18,
    color: appColors.white,
  },
  totalEarningsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.white,
  },
  totalEarningsLabel: {
    fontSize: 14,
    color: appColors.white,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  filterButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: appColors.secondary,
    borderRadius: 5,
    alignItems: 'center',
  },
  filterButtonText: {
    color: appColors.white,
    fontSize: 16,
  },
  earningsList: {
    width: '100%',
    flex: 1, // Ensure ScrollView takes available space
  },
  earningsListContent: {
    paddingBottom: 20, // Add padding to ensure content is not cut off
  },
  earningItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.secondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius:5,
  },
  earningDate: {
    color: appColors.white,
    fontSize: 16,
  },
  earningAmount: {
    color: appColors.white,
    fontSize: 16,
  },
  earningTime: {
    color: appColors.white,
    fontSize: 14,
  },
});

export default SalaryScreen;
