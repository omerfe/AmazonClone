import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="HomeScreen" options={{title: 'Home'}} />
        <Stack.Screen component={ProductScreen} name="ProductDetails" />
      </Stack.Navigator>
  );
};

export default HomeStack;