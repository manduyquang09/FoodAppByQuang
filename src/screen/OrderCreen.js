import { View, Text, TouchableOpacity, RootTagContext } from 'react-native';
import React, { useEffect } from 'react';
import Space from '../components/Space';
import CustomButton from '../components/CustomButton';
import { Colors } from '../contants';
import { useSelector } from 'react-redux';
import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { fireStoreDatabase } from '../firebase';
import InputField from '../components/InputField';

const OrderCreen = ({ navigation, route }) => {
    const { orderList, cart } = route.params;
    const totalAmount = (cartByRes) => {
        const totalPrice = cartByRes.reduce(
            (accumulator, food) => accumulator + food.unit * food.price,
            0,
        );
        console.log(totalPrice)
        return totalPrice;
    };
    const CreateOder = async () => {
        const user = {
            id: 1,
        };

        try {

            for (const order of orderList) {
                const restaurantId = Object.keys(order)[0];
                const orderRef = await addDoc(collection(fireStoreDatabase, 'orders'), {
                    "user_id": user.id,
                    "restaurant_id": restaurantId,
                    "total_price": await totalAmount(Object.values(order)[0]),
                    "order_date": "2023-12-10T12:30:00Z"
                });
                const foods = Object.values(order)[0];
                for (const food of foods) {
                    await addDoc(collection(fireStoreDatabase, 'orderItems'), {
                        "order_id": orderRef.id,
                        "user_id": user.id,
                        "restaurant_id": restaurantId,
                        "total_price": food.unit * food.price,
                        "order_date": "2023-12-10T15:45:00Z"
                    });
                }

            }
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        console.log('cart :  ' + JSON.stringify(orderList));

    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Space Size={34} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: 'blue',
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'centser',
                }}>
                <Text style={{ fontSize: 25, color: 'red' }}>Close</Text>
            </TouchableOpacity>
            <View></View>
            <InputField label={`Total : ${totalAmount(cart)}`} />
            <CustomButton
                label={'Thanh Toán'}
                backgroundColor={Colors.FABEBOOK_BLUE}
                onPress={() => CreateOder()}
            />
        </View>
    );
};

export default OrderCreen;
