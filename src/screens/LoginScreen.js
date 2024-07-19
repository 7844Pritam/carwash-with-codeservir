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
import CustomButton from '../components/CustomButton'; // Import the CustomButton component
import appColors from '../assets/config/Appcolor';
import logo from '../assets/images/logo2.png';
import Google from '../assets/images/google.png';
import Facebook from '../assets/images/facebook.png';
import {useNavigation} from '@react-navigation/native';
import car1 from '../assets/images/car1.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (field, text) => {
    setLoginData({...loginData, [field]: text});
    const error = validateField(field, text);
    setErrors({...errors, [field]: error});
  };

  const validateField = (field, value) => {
    let error = '';
    if (!value) {
      error = `${field} is required`;
    } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email format';
    } else if (field === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters';
    }
    return error;
  };

  const validateAllFields = () => {
    const newErrors = {};
    Object.keys(loginData).forEach(field => {
      const value = loginData[field];
      const error = validateField(field, value);
      newErrors[field] = error;
    });
    setErrors(newErrors);
    const isValid = Object.values(newErrors).every(error => !error);
    return isValid;
  };

  // Handle Login
  const handleLogin = async () => {
    const isValid = validateAllFields();
    navigation.navigate('AdminBottomNavigator');
    if (isValid) {
      try {
        const {email, password} = loginData;
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );

        const user = userCredential.user;
        const userDoc = (
          await firestore().collection('users').doc(user.uid).get()
        ).data();

        if (userDoc && userDoc.role === 'isAdmin') {
          console.log('admin');
          navigation.navigate('AdminBottomNavigator');
        } else {
          navigation.navigate('BottomNavigator');

        }
      } catch (e) {
        console.log(e.message);
        Alert.alert('Failed to log in', e.message);
      }
    } else {
      console.log('Fill in all fields properly');
    }
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

  const handleSignUp = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAR WASH</Text>
      <Image style={styles.logo} source={logo} />
      <View style={{width: '100%'}}>
        <CustomInputField
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={text => onChangeText('email', text)}
          error={errors.email}
          value={loginData.email}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <CustomInputField
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          onChangeText={text => onChangeText('password', text)}
          error={errors.password}
          value={loginData.password}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>
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
          <Image source={Google} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleFacebookSignIn}>
          <Image source={Facebook} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.rectangleContainer}>
        <View style={styles.car1}>
          <Image source={car1} />
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
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
    marginTop: 20,
  },
  signupLink: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 20,
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
  socialIcon: {
    width: 38,
    height: 38,
  },
  rectangleContainer: {
    position: 'relative',
    backgroundColor: appColors.secondary,
    bottom: -60,
    width: '120%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    height: '40%',
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
  errorText: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
});

export default LoginScreen;
