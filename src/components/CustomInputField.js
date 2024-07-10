import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const CustomInputField = ({ leftIcon, rightIcon, placeholder, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#bfbfbf"
        {...rest}
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
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
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
  },
});

export default CustomInputField;
