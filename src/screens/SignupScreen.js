import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import car1 from '../assets/images/car1.png'

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup button pressed');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in pressed');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook sign in pressed');
  };
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Image style={styles.logo} source={logo} />

        <CustomInputField
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <CustomInputField
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
        />
        <CustomInputField
          placeholder="Aadhar Number"
          value={aadhar}
          onChangeText={setAadhar}
          keyboardType="numeric"
        />
        <CustomInputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomInputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <CustomButton
          title="Sign Up"
          onPress={handleSignup}
          style={styles.signupButton}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>

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
          {/* <Image source={car1} /> */}
        </View>

      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,

  },
 
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: appColors.white,
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
   
  },
  inputField: {
    width: '100%',
    marginBottom: 20,
  },
  signupButton: {
    marginTop: 20,
    width: '100%',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: appColors.white,
  },
  loginLink: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
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
    zIndex: -1000, // Set zIndex to 0
  },
  car1: {
    flex: 1,
    position: 'absolute',
 
    top: 50,
    transform: [{skewY: '-10deg'}],
  },
});

export default SignupScreen;
