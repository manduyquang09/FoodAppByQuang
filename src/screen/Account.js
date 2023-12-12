import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';
import React from 'react';
import Space from '../components/Space';
import CustomButton from '../components/CustomButton';

const Account = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FF3F00'} translucent />
            <Space Size={25} />
            <View
                style={{
                    backgroundColor: '#FF3F00',
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                }}>
                <Text style={{ color: 'white' }}>Account and Settings</Text>
            </View>

            <View
                style={{ marginTop: 10 }}
            >
                <CustomButton
                    label={"Profile"}
                    backgroundColor={'#FF3F00'}
                />
                <CustomButton
                    label={"Profile"}
                    backgroundColor={'#FF3F00'}
                />
            </View>

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.logoutButtonTxt}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        backgroundColor: '#fff',
    },
    logoutBtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 15,
    },
    logoutButtonTxt: {
        color: '#4E4E4E',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
