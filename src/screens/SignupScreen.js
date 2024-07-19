import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import car1 from '../assets/images/png/person.png';
import lock from '../assets/images/png/lock.png';
import mobileIcon from '../assets/images/png/mobileIcon.png';
import aadharIcon from '../assets/images/png/aadharIcon.png';
import cakeIcon from '../assets/images/png/cakeIcon.png';

const SignupScreenNextPage = ({navigation}) => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    mobileNumber: '',
    aadhaarNumber: '',
    dateOfBirth: '',
  });

  const [errors, setFieldErrors] = useState({
    name: '',
    mobileNumber: '',
    aadhaarNumber: '',
    dateOfBirth: '',
  });

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        return (
          validateLength(value, 3, 'Name must be at least 3 characters') ||
          validateRequired(value, 'Name is required')
        );
      case 'mobileNumber':
        return (
          validateNumber(value, 10, 'Mobile number must be 10 digits') ||
          validateRequired(value, 'Mobile number is required')
        );
      case 'aadhaarNumber':
        return (
          validateNumber(value, 12, 'Aadhaar number must be 12 digits') ||
          validateRequired(value, 'Aadhaar number is required')
        );
      case 'dateOfBirth':
        return validateRequired(value, 'Date of Birth is required');
      default:
        return '';
    }
  };

  const validateLength = (value, minLength, errorMessage) => {
    return value.length >= minLength ? '' : errorMessage;
  };

  const validateNumber = (value, length, errorMessage) => {
    return /^\d+$/.test(value) && value.length === length ? '' : errorMessage;
  };

  const validateRequired = (value, errorMessage) => {
    return value.trim() !== '' ? '' : errorMessage;
  };

  const onChangeText = (field, text) => {
    setSignUpData({...signUpData, [field]: text});
    const error = validateField(field, text);
    setFieldErrors({...errors, [field]: error});
  };

  const validateAllFields = () => {
    const errors = {};
    Object.keys(signUpData).forEach(field => {
      const value = signUpData[field];
      const error = validateField(field, value);
      errors[field] = error;
    });
    setFieldErrors(errors);
    const isValid = Object.values(errors).every(error => !error);

    return isValid;
  };

  const handleContinueSignup = () => {
    const isValid = validateAllFields();
    if (isValid) {
      console.log('Go');
      navigation.navigate('SignupScreenNextPage', {signUpDatas: signUpData});
    } else {
      console.log('Please fill out the form carefully');
    }
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
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Sign Up</Text>
      <View style={{width: '100%'}}>
        <CustomInputField
          placeholder="Name"
          value={signUpData.name}
          onChangeText={text => onChangeText('name', text)}
          autoCapitalize="words"
          error={errors.name}
          leftIcon={car1}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <CustomInputField
          placeholder="Mobile Number"
          value={signUpData.mobileNumber}
          onChangeText={text => onChangeText('mobileNumber', text)}
          keyboardType="numeric"
          error={errors.mobileNumber}
          leftIcon={mobileIcon}
        />
        {errors.mobileNumber && (
          <Text style={styles.errorText}>{errors.mobileNumber}</Text>
        )}

        <CustomInputField
          placeholder="Aadhaar Number"
          value={signUpData.aadhaarNumber}
          onChangeText={text => onChangeText('aadhaarNumber', text)}
          keyboardType="numeric"
          error={errors.aadhaarNumber}
          leftIcon={aadharIcon}
        />
        {errors.aadhaarNumber && (
          <Text style={styles.errorText}>{errors.aadhaarNumber}</Text>
        )}

        <CustomInputField
          placeholder="Date of Birth (DD/MM/YYYY)"
          value={signUpData.dateOfBirth}
          onChangeText={text => onChangeText('dateOfBirth', text)}
          keyboardType="numeric"
          error={errors.dateOfBirth}
          leftIcon={cakeIcon}
        />
        {errors.dateOfBirth && (
          <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
        )}
      </View>

      <CustomButton
        title="Continue"
        onPress={handleContinueSignup}
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
          <Image source={Google} style={styles.logins} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleFacebookSignIn}>
          <Image source={Facebook} style={styles.logins} />
        </TouchableOpacity>
      </View>

      <View style={styles.rectangleContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: appColors.secondary,
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 110,
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
    color: appColors.primary,
  },
  loginLink: {
    color: '#000',
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
    width: '130%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{skewY: '10deg'}],
    zIndex: -1000,
  },
  car1: {
    flex: 1,
    position: 'absolute',
    top: 50,
    transform: [{skewY: '-10deg'}],
  },
  errorText: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
});

export default SignupScreenNextPage;
