import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import car1 from '../assets/images/car1.png';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>CAR CLEAN PLUS</Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.car1}>
      
          <Image source={car1}  />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -100,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rectangleContainer: {
    position: 'absolute',
    backgroundColor: appColors.secondary,
    bottom: -60,
    width: 450,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{skewY: '10deg'}],
  },
  car1:{
    flex:1,
    position:'absolute',
    top:50 , 
    transform: [{skewY: '-10deg'}],

  }
});
