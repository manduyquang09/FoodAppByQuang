import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const FoodCard = ({ food, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.Container}>
            <Image style={styles.image} source={{ uri: food.Img }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{food.nameFood}</Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '500',
                        marginTop: 3
                    }}
                >Price: <Text style={styles.price}>${food.price}</Text> </Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    Container: {

        width: 200,
        height: 200,
        margin: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 1,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 130,
        borderRadius: 10,
    },
    textContainer: {
        padding: 12,
    },
    title: {
        fontSize: 19,
        lineHeight: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        fontSize: 13.5,
        color: 'red',
        lineHeight: 15,
    },
});

export default FoodCard;
