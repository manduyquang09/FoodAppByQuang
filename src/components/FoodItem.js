import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import store from './../redux/store';
import { Colors } from '../contants';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/action/AuthAction';

const FoodItem = ({ selectedfood, onPress, cart }) => {

    const [unit, setUnit] = useState(0)
    const dispatch = useDispatch()
    const ChangeUnit = (number) => {
        const updatedFood = { ...selectedfood, unit: number };
        setUnit(number)
        selectedfood.unit = number
        dispatch(updateCart(updatedFood))
    }
    useEffect(() => {

        if (cart.length > 0) {
            foodUnit = cart.find((food) => food.foodId == selectedfood.foodId)
            if (foodUnit) {
                selectedfood.unit = foodUnit.unit
            }
        } else {
            selectedfood.unit = 0
        }
    }, [])
    return (
        <View
            style={{
                width: '100%',
                height: 100,
                flexDirection: 'row',
                borderColor: Colors.DEFAULT_GREY,
                borderWidth: 1,
                backgroundColor: 'rgba(241, 236, 239, 0.8)',
                marginTop: 5
            }}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                }}
                source={{ uri: selectedfood.Img }}
            />

            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    padding: 5,
                }}>
                <Text
                    style={{
                        fontSize: 17.5,
                        fontWeight: '600',
                    }}>
                    {selectedfood.name}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '400',
                    }}>
                    Breakfast
                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        width: '95%',
                    }}>
                    Phở is a very popular food in Vietnam
                </Text>
            </View>
            <View style={styles.containerQuantityCuont}>
                {selectedfood.unit === 0 ? (
                    <>
                        <TouchableOpacity
                            onPress={() => { ChangeUnit(1) }}
                            style={styles.AddCart}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Colors.DEFAULT_WHITE,
                                    padding: 5
                                }}>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>

                        <Text style={styles.caculateBtn} onPress={() => {
                            ChangeUnit(selectedfood.unit - 1)
                        }}>
                            -
                        </Text>
                        <Text style={styles.resultTextInput} >{selectedfood.unit}</Text>
                        <Text style={styles.caculateBtn} onPress={() => {
                            ChangeUnit(selectedfood.unit + 1)
                        }}>
                            +
                        </Text>



                    </>
                )}
            </View>
        </View>

    );
};

export default FoodItem;

const styles = StyleSheet.create({
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
    caculateBtn: {
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
    containerQuantityCuont: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3
    },
    AddCart: {

        backgroundColor: '#FF3F00',

        borderRadius: 20,
        elevation: 2,
        padding: 5,
    },
});
{
    /* <View
  style={{
      flexDirection: 'row',
      elevation: 2,
      borderWidth: 1,
      borderColor: 'white',
      alignItems: 'center',
      marginVertical: 15
  }}
  >
  <Image
      style={{
          width: 100,
          height: 90
      }}
      source={require("../assests/images/Burger.jpg")}
  />
  <View
      style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          padding: 10,
          backgroundColor: 'blue'
      }}
  >
      <Text
          style={{
              fontSize: 17.5,
              fontWeight: "600"
          }}
      >
          {food.name}
      </Text>
      <Text
          style={{
              fontSize: 14,
              fontWeight: "400",
          }}
      >
          Breakfast
      </Text>
      <Text
          style={{
              fontSize: 13,
              width: "80%"
          }}
      >
          Phở is a very popular type of food in Vietnam
      </Text>
  </View>
  <View
      style={{ backgroundColor: 'red' }}
  >
      <Text
          style={{ color: 'red', fontSize: 23 }}
      >Price 123</Text>
  </View>
  </View> */
}
