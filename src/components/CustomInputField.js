import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import appColors from '../assets/config/Appcolor';

const CustomInputField = ({ leftIcon,keyboardType, rightIcon, placeholder,onChangeText,value,error,...rest }) => {
  return (
    <View style={[styles.inputContainer,{borderColor:!error ? appColors.primary : 'red'}]}>
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#bfbfbf"
        {...rest}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}

      />
      {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  leftIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  rightIcon: {
    marginLeft: 10,
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333333',
    borderColor:'red'
  },
});

export default CustomInputField;
