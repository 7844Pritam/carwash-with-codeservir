import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton'; // Import the CustomButton component
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import {useNavigation} from '@react-navigation/native';
import car1 from '../assets/images/car1.png';


const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('FaceDetectionScreen');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in pressed');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook sign in pressed');
  };
  const handleFacebookSignUp = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>CAR WASH</Text>
      <Image style={styles.logo} source={logo} />

      <CustomInputField
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <CustomInputField
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCompleteType="password"
      />

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <CustomButton title="Login" onPress={handleLogin} />

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleGoogleSignIn}>
          <Image source={Facebook} style={styles.logins} />
          {/* <FontAwesome name="google" size={24} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleFacebookSignIn}>
          <Image source={Google} style={styles.logins} />
          {/* <AntDesign name="facebook-square" size={24} color="white" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.car1}>
          <Image source={car1} />
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              handleFacebookSignUp();
            }}>
            <Text style={styles.signupLink}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: appColors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.white,
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
  
  },
  logins: {
    width: 38,
    height: 38,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPassword: {
    color: appColors.white,
    textDecorationLine: 'underline',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    transform: [{skewY: '-10deg'}],

  },
  signupText: {
    color: appColors.white,
    marginTop:20

  },
  signupLink: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop:20
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  logins: {
    width: 38,
    height: 38,
  },
  rectangleContainer: {
    position: 'relative',
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
  car1: {
    flex: 1,
    position: 'absolute',
 
    top: 50,
    transform: [{skewY: '-10deg'}],
  },
});

export default LoginScreen;
