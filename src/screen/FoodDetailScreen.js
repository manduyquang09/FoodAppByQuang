import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { firebase } from '../Firebase/FirebaseConfig'
import Space from '../components/Space'
import CustomButton from '../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../redux/action/AuthAction'

const FoodDetailScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const selectedfood = route.params.food
    const cart = useSelector((state) => state.user.cart)
    const [unit, setUnit] = useState(0)
    const ChangeUnit = (number) => {
        setUnit(number)


    }
    useEffect(() => {
        if (cart.length > 0) {
            foodUnit = cart.find((food) => food.foodId === selectedfood.foodId)
            if (foodUnit) {
                setUnit(foodUnit.unit)
            }

        }
    }, [])
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#FF3F00'}
                translucent
            />
            <Space Size={24} />
            <View style={{ backgroundColor: '#FF3F00', paddingVertical: 15, paddingHorizontal: 15, height: 50, }}>
                <TouchableOpacity style={{}} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={{ color: 'white' }}>Close</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerIn}>
                <View style={styles.containerIn1}>
                    <Image source={{ uri: selectedfood.Img }} style={styles.cardimage} />
                </View>

                <View style={styles.containerIn2}>
                    <View style={styles.containerIn2_s1}>
                        <Text style={styles.containerIn2_s1_foodname}>{selectedfood.nameFood}</Text>
                        <Text style={styles.containerIn2_s1_foodprice}>{selectedfood.price} Đ</Text>
                    </View>

                    <View style={styles.containerIn2_s2}>
                        <Text style={styles.containerIn2_s2_head}>About food</Text>
                        <Text style={styles.containerIn2_s2_description}>Best Food that is availble in our country</Text>


                    </View>

                    <View style={styles.containerFormAdd}>
                        <Text style={styles.Quantity}>Quantity</Text>

                        <View style={styles.containerQuantityCuont}>
                            <Text style={styles.minusText} onPress={() => {
                                unit > 0 && ChangeUnit(unit - 1)
                            }}>-</Text>
                            <Text style={styles.resultTextInput}>{unit}</Text>
                            <Text style={styles.plusText} onPress={() => {
                                ChangeUnit(unit + 1)
                            }}>+</Text>
                        </View>

                    </View>


                </View>
                <CustomButton
                    label={"Add to Cart"}
                    backgroundColor={"#FF3F00"}
                    onPress={() => {
                        if (unit > 0) {
                            selectedfood.unit = unit
                            dispatch(updateCart(selectedfood))

                        } else {
                            return
                        }
                    }}
                />


            </View>


        </ScrollView>
    )
}

export default FoodDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        width: '100%',
        height: '100%'

    },
    containerIn: {
        backgroundColor: '#ebebeb'
    },
    containerIn1: {
        width: '100%',
        height: 220,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardimage: {
        width: '100%',
        height: '100%',

    },
    containerIn2: {
        width: '100%',
        padding: 20,
        position: 'relative',
        top: -30,
        backgroundColor: '#ebebeb',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },
    containerIn2_s1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    containerIn2_s1_foodname: {
        fontSize: 25,
        fontWeight: '600',
        width: 220,
        marginRight: 10
    },
    containerIn2_s1_foodprice: {
        fontSize: 26,
        fontWeight: '600',
    },
    containerIn2_s2: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
    },
    containerIn2_s2_head: {
        fontSize: 18,
        fontWeight: '600',
    },
    containerIn2_s2_description: {
        paddingTop: 10,
        fontSize: 15,
    },
    containerIn2_s2_veg: {
        backgroundColor: 'green',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        width: 70,
        alignItems: 'center',
        marginTop: 5
    },
    containerIn2_s3: {
        backgroundColor: '#F2F2F2',
        width: '100%',

        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
        elevation: 2,
        alignItems: 'center',
    },
    containerIn2_s3_restaurantnameheading: {
        color: 'grey',
        fontSize: 20,
        fontWeight: '600',
    },
    containerIn2_s3_restaurantname: {
        color: '#9c9c9c',
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 10,
    },
    containerIn3: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'row',
    },
    containerFormAdd: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center'
    },

    Quantity: {
        color: 'grey',
        fontSize: 18,
        fontWeight: '600'
    },
    containerQuantityCuont: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    minusText: {
        backgroundColor: '#FF3F00',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 2,
        padding: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    resultTextInput: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        padding: 10,
        width: 50,
        borderRadius: 20,
        marginHorizontal: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    plusText: {
        backgroundColor: '#FF3F00',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 2,
        padding: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerIn3_buybtn: {
        width: '90%',
        height: 50,
        backgroundColor: '#FF3F00',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        color: 'black',
        margin: 10,
        alignSelf: 'center',
    },
    containerIn3_buybtn_txt: {
        color: '#F2F2F2',
        paddingVertical: 5,
        fontSize: 17,
        borderRadius: 10,
        // width: '90%',
        textAlign: 'center',
        fontWeight: '600',
        alignSelf: 'center'
    }

})