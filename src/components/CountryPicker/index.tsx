import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import countryList from 'country-list'

const countries = countryList.getData();
const CountryPicker = () => {
    const [country, setCountry] = useState(countries[0].code);
  return (
    <View style={styles.row}>
        <Picker 
        selectedValue={country}
        onValueChange={setCountry}
        >
            {countries.map((country: { code: React.Key; name: string;}) => 
                <Picker.Item key={country.code} value={country.code} label={country.name} />
            )}
        </Picker>
      </View>
  )
}

const styles = StyleSheet.create({
    row: {
        padding: 5,
    },
});

export default CountryPicker