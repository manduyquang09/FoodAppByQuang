import {
    View,
    ScrollView,
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    FlatList,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../contants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Space from '../components/Space';
import InputField from '../components/InputField';
import { SearchBar } from 'react-native-screens';
import Categories from '../components/Categories';
import RestaurantCard from '../components/RestaurantCard';
import { fireStoreDatabase } from '../firebase';
import { getAllFood, getAllRestaurant } from '../redux/action/supplyAction';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../components/FoodCard';
const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { restaurantList, foodList } = useSelector(state => state.supply);

    useEffect(() => {
        dispatch(getAllRestaurant());
        dispatch(getAllFood());

    }, []);


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FF3F00'} translucent />
            <Space Size={24} />
            <View style={styles.header}>
                <View style={styles.Location}>
                    <Icon name="location-on" size={28} color={Colors.DEFAULT_BLACK} />

                    <Text
                        style={{
                            marginLeft: 5,
                            fontSize: 15,
                            lineHeight: 13 * 1.4,
                            color: Colors.DEFAULT_BLACK,
                            fontWeight: '700',
                        }}>
                        WelCome
                    </Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: Colors.DEFAULT_WHITE,
                    height: 45,
                    marginTop: 20,
                    elevation: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    borderRadius: 20,
                    marginVertical: 10,
                    marginHorizontal: 5,
                    width: '90%',
                    alignSelf: 'center',
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <Icon name="search" size={25} color={'#FF3F00'} />
                    <TextInput
                        placeholder="Search"
                        style={{
                            fontSize: 15,
                            color: 'black',
                        }}
                    />
                </View>
                <Icon name="tune" size={23} color={Colors.GOOGLE_BLUE} />
            </View>
            <ScrollView>
                <Categories />
                <Text style={styles.title}>Hot Restaurant</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {restaurantList.length > 0
                        ? restaurantList.map((item, index) => (
                            <RestaurantCard key={index} Restaurant={item}

                                onPress={() => navigation.navigate("Restaurant", { restaurant: item })}
                            />
                        ))
                        : null}
                </ScrollView>
                <Text style={styles.title}>Hot Food</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={foodList}
                    renderItem={({ item }) => <FoodCard food={item}
                        onPress={() => navigation.navigate("foodDetail", { food: item })}
                    />}
                />
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    Location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        fontSize: 19,
        lineHeight: 40,
        color: 'gray',
        fontWeight: '800',
    },
});
export default HomeScreen;
