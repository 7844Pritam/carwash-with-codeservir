import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {ActivityIndicator, Button} from 'react-native-paper';
import appColors from '../../assets/config/Appcolor';
import {Picker} from '@react-native-picker/picker';
import FormInputField from '../../components/FormInputField';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const FormScreen = () => {
  const [selectStaff, setSelectStaff] = useState('');
  const navigation = useNavigation();

  const [leadData, setLeadData] = useState({
    customerName: '',
    email: '',
    mobileNumber: '',
    vehicleNumber: '',
    vehicleName: '',
    address: '',
    area: '',
    pincode: '',
    date: '',
    time: '',
    createAt: moment(Date()).format('DD-MM-YYYY h:m a'),
    updateAt: moment(Date()).format('DD-MM-YYYY h:m a'),
    status: 'Pending',
    price: '',
    selectstaff: '',
  });

  const [staffList, setStaffList] = useState([]);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await firestore()
          .collection('users')
          .where('role', '!=', 'isAdmin')
          .get();
        if (!datas.empty) {
          setStaffList(datas.docs.map(doc => doc.data()));
        } else {
          setStaffList([]);
        }
      } catch (error) {
        console.error('Error fetching staff list: ', error);
        setStaffList([]);
      }
    };

    fetchData();
  }, []);

  const validateField = (field, value) => {
    switch (field) {
      case 'customerName':
        if (!value) return 'Customer name is required';
        break;
      case 'email':
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Invalid email format';
        break;
      case 'mobileNumber':
        if (!value) return 'Mobile number is required';
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(value)) return 'Invalid mobile number';
        break;
      case 'vehicleNumber':
        if (!value) return 'Vehicle number is required';
        break;
      case 'vehicleName':
        if (!value) return 'Vehicle name is required';
        break;
      case 'address':
        if (!value) return 'Address is required';
        break;
      case 'area':
        if (!value) return 'Area is required';
        break;
      case 'pincode':
        if (!value) return 'Pincode is required';
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(value)) return 'Invalid pincode';
        break;
      case 'date':
        if (!value) return 'Date is required';
        break;
      case 'price':
        if (!value) return 'Price is required';
        if (isNaN(value)) return 'Price must be a number';
        break;
      case 'selectstaff':
        if (!value) return 'Staff is required';
        break;
      default:
        return '';
    }
  };

  const onChangeText = (field, text) => {
    setLeadData({...leadData, [field]: text});
    setErrors({...errors, [field]: validateField(field, text)});
  };

  
  const onSave = async () => {
    const newErrors = {};

    Object.keys(leadData).forEach(field => {
      const error = validateField(field, leadData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true); 
      try {
        await firestore().collection('Leads').add(leadData);
        Alert.alert('Data Saved Successfully');
        navigation.navigate('Home');
      } catch (e) {
        Alert.alert(e.message);
      } finally {
        setLoading(false); 
      }
    }
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShow(false);
      const formattedDate = moment(selectedDate).format('DD-MM-YYYY');
      onChangeText('date', formattedDate);
      setShowTime(true);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setShowTime(false);
      const formattedTime = moment(selectedTime).format('h:m a');
      onChangeText('time', formattedTime);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const onSelectStaffChange = itemValue => {
    setSelectStaff(itemValue);
    setLeadData({...leadData, selectstaff: itemValue});
    setErrors({
      ...errors,
      selectstaff: validateField('selectstaff', itemValue),
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={appColors.secondary} />
        </View>
      ) : (
        <>
          <Button style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={{ color: appColors.white }}>Back</Text>
          </Button>
          <Text style={styles.headerText}>Customer Information</Text>
  
          <ScrollView contentContainerStyle={styles.container}>
            <FormInputField
              onChangeText={text => onChangeText('customerName', text)}
              placeholder="Enter Customer name"
              label="Customer name:"
            />
            {errors.customerName && (
              <Text style={styles.errorText}>{errors.customerName}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('email', text)}
              placeholder="Enter Email"
              label="Email:"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('mobileNumber', text)}
              placeholder="Enter mobile number"
              label="Mobile number:"
              keyboardType={'number-pad'}
            />
            {errors.mobileNumber && (
              <Text style={styles.errorText}>{errors.mobileNumber}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('vehicleNumber', text)}
              placeholder="Vehicle number"
              label="Vehicle number:"
            />
            {errors.vehicleNumber && (
              <Text style={styles.errorText}>{errors.vehicleNumber}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('vehicleName', text)}
              placeholder="Vehicle name"
              label="Vehicle name:"
            />
            {errors.vehicleName && (
              <Text style={styles.errorText}>{errors.vehicleName}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('address', text)}
              placeholder="Address"
              label="Address:"
            />
            {errors.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('area', text)}
              placeholder="Area"
              label="Area:"
            />
            {errors.area && <Text style={styles.errorText}>{errors.area}</Text>}
  
            <FormInputField
              onChangeText={text => onChangeText('pincode', text)}
              placeholder="Pincode"
              label="Pincode:"
            />
            {errors.pincode && (
              <Text style={styles.errorText}>{errors.pincode}</Text>
            )}
  
            <TouchableOpacity onPress={showDatepicker}>
              <FormInputField
                placeholder={'Select Date'}
                label="Date:"
                value={leadData.date}
                editable={false}
              />
            </TouchableOpacity>
            {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
  
            <TouchableOpacity onPress={showDatepicker}>
              <FormInputField
                placeholder={'Select Time'}
                label="Time:"
                value={leadData.time}
                editable={false}
              />
            </TouchableOpacity>
            {errors.time && <Text style={styles.errorText}>{errors.time}</Text>}
  
            {show && (
              <DateTimePicker
                value={new Date()} // Use the current date or the stored date
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
  
            {showTime && (
              <DateTimePicker
                value={new Date()} // Use the current date or the stored date
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
  
            <FormInputField
              onChangeText={text => onChangeText('price', text)}
              placeholder="Price"
              label="Price:"
              keyboardType={'number-pad'}
            />
            {errors.price && (
              <Text style={styles.errorText}>{errors.price}</Text>
            )}
  
            <Text style={styles.selectStaffText}>Select Staff</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectStaff}
                onValueChange={onSelectStaffChange}>
                <Picker.Item label="Select Staff" value="" />
                {staffList.map((staff, index) => (
                  <Picker.Item
                    key={index}
                    label={staff.name}
                    value={staff.uid}
                  />
                ))}
              </Picker>
            </View>
            {errors.selectstaff && (
              <Text style={styles.errorText}>{errors.selectstaff}</Text>
            )}
  
            <CustomButton onPress={onSave} title="Save" />
          </ScrollView>
        </>
      )}
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
  pickerContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 6,
    marginBottom: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default FormScreen;
