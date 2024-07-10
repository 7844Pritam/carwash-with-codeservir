import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import icon from '../assets/images/logo2.png';
import appColors from '../assets/config/Appcolor';

const TopBar = ({heading}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{heading}</Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    height:65,
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.primary,
    width: '94%',
    marginTop: 20,
    height: 50,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: -30,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
});
