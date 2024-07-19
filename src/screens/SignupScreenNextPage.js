import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import car1 from '../assets/images/png/person.png';
import lock from '../assets/images/png/lock.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const SignupScreenNextPage = ({route}) => {
  const {signUpDatas} = route.params;
  const navigation = useNavigation();

  const [signUpData, setSignUpData] = useState({
    name: signUpDatas.name,
    mobileNumber: signUpDatas.mobileNumber,
    aadhaarNumber: signUpDatas.aadhaarNumber,
    dateOfBirth: signUpDatas.dateOfBirth,
    email: '',
    password: '',
    confirmPassword: '',
    role: 'isUser',
  });

  const [errors, setFieldErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateField = (field, value) => {
    switch (field) {
      case 'email':
        return (
          validateEmail(value) || validateRequired(value, 'Email is required')
        );
      case 'password':
        return validatePassword(value);
      case 'confirmPassword':
        return validateConfirmPassword(value);
      default:
        return '';
    }
  };

  const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) ? '' : 'Invalid email address';
  };

  const validatePassword = password => {
    if (!isPasswordValid(password)) {
      return 'Password must contain at least one uppercase letter';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    } else {
      return '';
    }
  };

  const isPasswordValid = password => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
    return passwordPattern.test(password);
  };

  const validateConfirmPassword = confirmPassword => {
    return (
      validateRequired(confirmPassword, 'Confirm Password is required') ||
      (signUpData.password === confirmPassword
        ? ''
        : 'Confirm Password did not match')
    );
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

  const handleSignup = async () => {
    const isValid = validateAllFields();
    if (isValid) {
      console.log('Go');
      console.log(signUpData);
  
      try {
        const credential = await auth().createUserWithEmailAndPassword(signUpData.email, signUpData.password);
        console.log(credential);
  
        const user = credential.user;
        await firestore().collection("users").doc(user.uid).set({
          ...signUpData,
          uid: user.uid
        });
  
        // Success message
        Alert.alert('Success', 'You have signed up successfully');
        navigation.navigate("LoginScreen");
  
      } catch (e) {
        console.log(e.message);
        Alert.alert('Failed to sign up', e.message);
      }
    } else {
      console.log("Fill the input field correctly");
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
          placeholder="Email"
          value={signUpData.email}
          onChangeText={text => onChangeText('email', text)}
          autoCapitalize="none"
          error={errors.email}
          leftIcon={car1}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <CustomInputField
          placeholder="Password"
          value={signUpData.password}
          onChangeText={text => onChangeText('password', text)}
          secureTextEntry
          error={errors.password}
          leftIcon={lock}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <CustomInputField
          placeholder="Confirm Password"
          value={signUpData.confirmPassword}
          onChangeText={text => onChangeText('confirmPassword', text)}
          secureTextEntry
          error={errors.confirmPassword}
          leftIcon={lock}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
      </View>

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
          <Image source={Google} style={styles.logins} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleFacebookSignIn}>
          <Image source={Facebook} style={styles.logins} />
        </TouchableOpacity>
      </View>

      <View style={styles.rectangleContainer}>
        {/* <Image source={car1} style={styles.car1} /> */}
      </View>
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
    width: '130%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    height: '40%',
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
  errorText: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
});

export default SignupScreenNextPage;
