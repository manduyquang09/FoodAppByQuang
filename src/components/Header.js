import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../contants/index';
const Header = () => {
    return (
        <View
            style={styles.Container}
        >

            <TouchableOpacity

            >
                <Icon

                    name="arrow-back-ios"
                    size={30}
                    color={Colors.DEFAULT_BLACK}

                /></TouchableOpacity>
            <Text
                style={{
                    color: "black", fontSize: 20
                    ,

                    fontWeight: 'bold'
                }}
            >Register here </Text>
            <Text>22</Text>


        </View>
    )
}
const styles = StyleSheet.create({
    Container: {

        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row'
        , justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE



    }
})
export default Header