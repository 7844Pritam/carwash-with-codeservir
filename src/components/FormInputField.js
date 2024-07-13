import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const FormInputField = ({
  leftIcon,
  rightIcon,
  placeholder,
  onChangeText,
  value,
  label,
  ...rest
}) => {
  return (
    <View>
      <Text style={{marginLeft:5,marginTop:4,marginBottom:4,fontWeight:"700", fontSize:14}}>{label}</Text>
  
      <View style={styles.inputContainer}>
        {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#bfbfbf"
          {...rest}
          onChangeText={onChangeText}
          value={value}
        />
        {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
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

export default FormInputField;
