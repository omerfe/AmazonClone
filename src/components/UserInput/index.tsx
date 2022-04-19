import {Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const UserInput = ({text}: any) => {
    const [input, setInput] = useState('');
    
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{text}</Text>
      <TextInput 
      style={styles.input} 
      placeholder={text} 
      value={input} 
      onChangeText={setInput}
      keyboardType={text === 'Phone' ? 'phone-pad': 'default'}
    />
    </View>
  );
};

export default UserInput;
