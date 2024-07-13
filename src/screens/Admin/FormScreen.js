import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInputField from '../../components/CustomInputField';
import CustomButton from '../../components/CustomButton';
import {Button} from 'react-native-paper';
import appColors from '../../assets/config/Appcolor';
import {Picker} from '@react-native-picker/picker';
import FormInputField from '../../components/FormInputField';
import { useNavigation } from '@react-navigation/native';

const FormScreen = () => {
  const [selectStaff, setSelectStaff] = useState('');
  const navigation = useNavigation();

  return (
    <View>
      <Button style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={{color: appColors.white}}>Back</Text>
      </Button>
      <Text style={styles.headerText}>Customer Information</Text>

      <ScrollView contentContainerStyle={styles.container}>
        <FormInputField
          placeholder="Enter Customer name"
          label={'Customer name:'}
        />
        <FormInputField placeholder="Enter Email" label={'Email:'} />
        <FormInputField
          placeholder="Enter mobile number"
          label={'Mobile number:'}
        />
        <FormInputField
          placeholder="Vehicle number"
          label={'Vehicle number:'}
        />
        <FormInputField placeholder="Vehicle name" label={'Vehicle name:'} />
        <FormInputField placeholder="Address" label={'Address:'} />
        <FormInputField placeholder="Area" label={'Area:'} />
        <FormInputField placeholder="Pincode" label={'Pincode:'} />
        <FormInputField placeholder="Select Date" label={'Date:'} />
        <FormInputField placeholder="Price" label={'Price:'} />

        <Text style={{marginTop:10,marginLeft:5,fontWeight:"700", fontSize:14, color:'black'}}>Select Staff</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectStaff}
            onValueChange={itemValue => setSelectStaff(itemValue)}>
            <Picker.Item label="Select Staff" value="" />
            <Picker.Item label="Vinod2" value="Vinod2" />
            <Picker.Item label="Vinod3" value="Vinod3" />
            <Picker.Item label="Vinod4" value="Vinod4" />
            <Picker.Item label="Vinod5" value="Vinod5" />
          </Picker>
        </View>

        <CustomButton onPress={()=>navigation.navigate("Home")} title="Save" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 200,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: appColors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  selectStaffText: {
    fontSize: 14,
    fontWeight: '700',
    color: appColors.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: appColors.primary,
    width: 100,
    margin: 20,
  },
  pickerContainer:{
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:10,
    borderColor: '#ccc',
  }
});

export default FormScreen;
