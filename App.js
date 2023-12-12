
import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from './src/contants/index';
import LoginScreen from './src/screen/Auth/LoginScreen';
import RegisterScreen from './src/screen/Auth/RegisterScreen';
import { useSelector } from 'react-redux';
import OrderScreen from './src/screen/CartScreen';
import UserProfile from './src/screen/userProfile';
import HomeScreen from './src/screen/HomeScreen';
import RootNavigator from './src/Navigation/rootNavigator';
import RestaurantCard from './src/components/RestaurantCard';
import RestaurantScreen from './src/screen/RestaurantScreen';
import FoodDetailScreen from './src/screen/FoodDetailScreen';
const App = () => {
  return (
    <RootNavigator />


  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
