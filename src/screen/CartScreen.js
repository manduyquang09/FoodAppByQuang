import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CartByRestaurant } from '../service/solvingTask';
import FoodItem from '../components/FoodItem';
import jestConfig from '../../jest.config';
import { set } from 'firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import { DelCartItem } from '../redux/action/AuthAction';

const CartScreen = ({ navigation }) => {
    const cart = useSelector(state => state.user.cart);
    const { restaurantList, foodList } = useSelector(state => state.supply);
    const [cartbyRestaurant, setCartbyRestaurant] = useState([])
    const [done, setDone] = useState(false)
    const dispatch = useDispatch()
    const SortingCart = () => {

        const newCart = cart.reduce((accumulator, item) => {
            console.log("KEY :  " + JSON.stringify(item))
            const key = item.restaurantId
            const value = {
                "foodId": item.foodId,
                "unit": item.unit,
                "nameFood": item.nameFood,
                "restaurantId": item.restaurantId,
                "price": item.price,
                "Img": item.Img
            };

            if (accumulator[key]) {
                accumulator[key].push(value);
            } else {
                accumulator[key] = [value];
            }

            return accumulator;
        }, {});

        const finalCart = Object.keys(newCart).map(key => {
            const resCart = {};
            resCart[key] = newCart[key];
            return resCart;
        });
        return finalCart
    };
    const CreateOrder = () => {

    }
    useEffect(() => {
        if (cart.length > 0) {
            SortingCart().map((item) => {
                console.log("123 :  " + JSON.stringify(Object.values(item)[0]))
            })
            setCartbyRestaurant(SortingCart())
        } else {
            setCartbyRestaurant([])
        }

    }, [cart]);

    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#FF3F00',
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                    marginTop: 30,
                }}></View>

            <ScrollView>
                <Text style={styles.mainHeading}>My Orders</Text>
                <View style={styles.mainContainer}>
                    {cartbyRestaurant.length > 0 ? cartbyRestaurant.map((item) =>

                    (

                        <>
                            <Text style={styles.orderId}>{restaurantList.find(restaurant => restaurant.restaurantId === Object.keys(item)[0]).name}</Text>
                            <FlatList
                                data={Object.values(item)[0]}
                                renderItem={(item) =>
                                (<View style={styles.orderItemContainer}>
                                    <View>
                                        <Image source={{ uri: Object.values(item)[0].Img }} style={styles.cardimage} />
                                    </View>

                                    <View style={styles.orderItemContainer_2}>
                                        <View>
                                            <Text style={styles.orderItemName}>{Object.values(item)[0].nameFood}</Text>
                                            <Text style={styles.orderItemPrice} >{Object.values(item)[0].price}</Text>
                                            <Text>Qty : {Object.values(item)[0].unit}</Text>

                                        </View>

                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10

                                            ,
                                            justifyContent: 'center'
                                        }}
                                    >

                                        <TouchableOpacity
                                            onPress={() => {
                                                if (cart.length > 0) {
                                                    dispatch(DelCartItem(Object.values(item)[0].foodId))
                                                }
                                                else { return }
                                            }}
                                        ><Icon
                                                name={"delete"}
                                                size={30}
                                                color={"green"}
                                            /></TouchableOpacity>
                                    </View>
                                </View>
                                )
                                }
                            />
                        </>
                    )
                    ) : (<>
                        <Text>Nothing</Text>
                    </>)}

                </View>
                <CustomButton
                    label={"Thanh Toan"}
                    backgroundColor={"red"}
                    onPress={() => navigation.navigate("Order", { orderList: cartbyRestaurant, cart: cart })}
                />
            </ScrollView>

        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainHeading: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: '500',
    },

    mainContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 2,
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 20,
    },
    orderId: {
        fontSize: 16,
        color: 'grey',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        paddingVertical: 5,
    },
    orderTime: {
        paddingHorizontal: 6,
        paddingVertical: 5,
    },
    orderTotal: {
        fontSize: 17,
        textAlign: 'right',
        marginVertical: 5,
        marginRight: 20,
        fontWeight: '600',
    },
    orderItemContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
        marginVertical: 2,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        elevation: 2,

    },
    cardimage: {
        width: 90,
        height: 80,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    orderItemContainer_2: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    orderItemName: {
        fontSize: 16,
        fontWeight: '600',
    },
    orderItemPrice: {},
});
