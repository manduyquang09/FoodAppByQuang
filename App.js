import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import RootNavigator from './src/Navigation/rootNavigator';
import UserProfile from './src/screen/userProfile';
import Test from './src/screen/test';
const App = () => {
  return <RootNavigator />;
  // return (
  //   <View style={{flex: 1}}>
  //     <Test />
  //   </View>
  // );
};

export default App;
