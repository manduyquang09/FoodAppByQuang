
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import LoginScreen from '../screen/Auth/LoginScreen'
import RegisterScreen from '../screen/Auth/RegisterScreen'
import HomeScreen from '../screen/HomeScreen'
import AppStack from './AppStack'
const RootNavigator = () => {
    return (
        <AppStack />
    )
}

export default RootNavigator