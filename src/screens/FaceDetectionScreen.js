import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import appColors from '../assets/config/Appcolor';
import {useNavigation} from '@react-navigation/native';

const FaceDetectionScreen = () => {
  const navigation = useNavigation();

  const handleDoneButton = () => {
    console.log('Done button Pressed!');
    navigation.navigate('BottomNavigator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangleContainerUp}></View>

      <Text style={styles.title}>Face Detection</Text>

      <View style={styles.camera}>
        <View style={styles.faceBoxContainer}>
          <View style={styles.faceBox}>
            <Text style={styles.faceText}>Face Detected</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.captureButton}>
        <Text style={styles.buttonText}>Capture</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            {backgroundColor: 'red', borderWidth: 2, borderColor: 'white'},
          ]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDoneButton}
          style={[
            styles.bottomButton,
            {backgroundColor: 'green', borderWidth: 2, borderColor: 'white'},
          ]}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rectangleContainerDown}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.white,
    marginTop: -70,
    marginBottom: 70,
  },
  camera: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  faceBoxContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceBox: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  faceText: {
    color: 'white',
    fontSize: 16,
  },
  captureButton: {
    width: '90%',
    height: 50,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  bottomButton: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: -1000,
  },
});

export default FaceDetectionScreen;
