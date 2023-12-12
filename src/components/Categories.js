import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

const Categories = ({ props }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#ddfbf3' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Pho.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Pho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#f5e5ff' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Pizza.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Pizza</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#e5f1ff' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Burger.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Burger</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#ebfde5' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Drink.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Drink</Text>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#ebfde5' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Drink.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Drink</Text>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#ebfde5' }]}>
                    <Image
                        style={styles.img}
                        source={require('../assests/images/Drink.jpg')}
                    />
                    <Text style={{ marginLeft: 5 }}>Drink</Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: '10',
    },
    button: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 15,
        padding: 13,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 25,
        height: 25,
    },
});
export default Categories;
