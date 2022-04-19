import {StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import UserInput from '../../components/UserInput';
import CountryPicker from '../../components/CountryPicker';
import {Formik} from 'formik';

const AddressScreen = () => {
  return (
    <Formik 
        initialValues={{fullName: '', phone: '', address: '', city: ''}} 
        onSubmit={values => console.log(values)}>
      {({handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
          <ScrollView style={styles.root}>
            <CountryPicker/>
            <UserInput text="Full Name" value={values.fullName}/>
            <UserInput text="Phone" value={values.phone}/>
            <UserInput text="Address" value={values.address}/>
            <UserInput text="City" value={values.city}/>
            <Button text="Checkout" onPress={handleSubmit} />
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
});

export default AddressScreen;
