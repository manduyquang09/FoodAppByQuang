import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../contants';
const CustomHeader = ({ title, hasIcon, onPress }) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20
                , justifyContent: 'center'
            }}
        >
            {hasIcon ?
                <TouchableOpacity
                    onPress={onPress}
                    style={{

                        position: 'absolute',
                        left: 0
                    }}>
                    <Icon name="arrow-back-ios" size={30}
                        color={Colors.DEFAULT_BLACK}


                    />
                </TouchableOpacity>
                : null}
            <Text
                style={{
                    fontSize: 24
                    ,
                    fontFamily: "Roboto-Medium",
                    fontWeight: '700',

                }}
            >{title}</Text>
        </View>
    )
}

export default CustomHeader