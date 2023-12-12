import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Space from '../components/Space';
import FoodItem from '../components/FoodItem';
import { useSelector } from 'react-redux';
import { getFoodByRes } from '../service/solvingTask';

const RestaurantScreen = ({ navigation, route }) => {

    const cart = useSelector((state) => state.user.cart)
    const restaurant = route.params.restaurant
    const { getMenu } = getFoodByRes(restaurant.restaurantId)
    const [menu, setMenu] = useState([])
    useEffect(() => {
        setMenu(getMenu())
        console.log("menu:  " + JSON.stringify(getMenu()))
    }, [])
    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" translucent />
            <Space Size={24} />

            <ImageBackground
                style={{
                    width: '100%'
                    , height: 300
                }}
                source={{ uri: restaurant.Image }}
            >
                <View style={styles.header}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <ScrollView style={styles.content}>
                <Text style={styles.sectionTitle}>Restaurant Information</Text>
                <Text>{`Location: ${restaurant.address}`}</Text>

                <Text style={styles.sectionTitle}>Menu</Text>

                <FlatList
                    data={menu}
                    renderItem={({ item }) => (
                        <FoodItem
                            selectedfood={item}
                            cart={cart}
                        />
                    )}
                />
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    restaurantName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    closeButton: {
        color: 'white',
    },
    content: {

        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    foodItem: {
        marginBottom: 10,
    },
});

export default RestaurantScreen;
