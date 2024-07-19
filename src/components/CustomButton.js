import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import appColors from '../assets/config/Appcolor';


const CustomButton = ({ title, onPress, stylesecond }) => {
  return (
    <TouchableOpacity style={[styles.button, stylesecond]} onPress={onPress}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
