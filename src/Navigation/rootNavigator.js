import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AppStack from './appStack';
import AuthStack from './authStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const {clearToken} = useSelector(state => state.user);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userData');
        console.log('TOKEN' + JSON.stringify(userToken));
        console.log('hello' + JSON.stringify(userToken));
        setToken(userToken);
        setIsLoading(false);
      } catch (error) {
        console.error('Check login status error:', error);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
