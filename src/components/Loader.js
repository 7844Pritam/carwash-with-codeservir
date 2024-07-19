import React from 'react'
import { ScrollView, View } from 'react-native'
import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import CustomButton from './CustomButton';

const Loader = () => {
  return (
<View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="large" color={appColors.primary} />
    ) : (
      <>
        <Button style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={{ color: appColors.white }}>Back</Text>
        </Button>
        <Text style={styles.headerText}>Customer Information</Text>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Your form fields here */}
          <FormInputField
            onChangeText={text => onChangeText('customerName', text)}
            placeholder="Enter Customer name"
            label="Customer name:"
          />
          {errors.customerName && (
            <Text style={styles.errorText}>{errors.customerName}</Text>
          )}
          {/* Add the rest of your form fields here */}
          <CustomButton onPress={onSave} title="Save" />
        </ScrollView>
      </>
    )}
  </View>  )
}

export default Loader;


const styles = StyleSheet.create({
    // ... other styles
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingBottom: 200,
    },
  });
  