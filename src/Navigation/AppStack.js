
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screen/HomeScreen'
import RestaurantScreen from '../screen/RestaurantScreen'
import FoodListScreen from '../screen/FoodListScreen'
import FoodDetailScreen from '../screen/FoodDetailScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserProfile from '../screen/userProfile'
import CartScreen from '../screen/CartScreen'
import OrderCreen from '../screen/OrderCreen'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="foodDetail"
                component={FoodDetailScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Order"
                component={OrderCreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
const AppStack = () => {
    const [iconName, setIconName] = useState("")
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: styles.tabBar,
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Home') {
                            return <Icon name={"home"} size={size}
                                color={color} />
                        }
                        else if (route.name === 'userProfile') {
                            return <Icon name={'person'} size={size}
                                color={color} />
                        }
                        else if (route.name === 'Cart') {

                            return <Icon name={'shopping-cart'} size={size}
                                color={color} />
                        }


                    },
                    tabBarLabelStyle: styles.tabBarLabel
                })}
            >

                <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />

                <Tab.Screen name="userProfile" component={UserProfile} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={CartStack} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppStack

const styles = StyleSheet.create({
    tabBar: {
        height: 55,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    tabBarLabel: {
        paddingBottom: 5
    }
})