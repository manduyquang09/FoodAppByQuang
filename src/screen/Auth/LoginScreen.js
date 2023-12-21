import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../contants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton, InputField, Header, Space} from '../../components';
import {useDispatch} from 'react-redux';
import {
  auth,
  signInWithEmailAndPassword,
  fireStoreDatabase,
} from '../../firebase';
import {collection, doc, getDoc} from 'firebase/firestore';
import {setUser} from '../../redux/action/authAction';
import SimpleToast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const userId = userCredential.user.uid;
        const userRef = doc(fireStoreDatabase, 'users', userId);
        const userSnap = await getDoc(userRef);
        return userSnap;
      })
      .then(userSnap => {
        if (userSnap.exists()) {
          SimpleToast.show('successfully');
          dispatch(setUser(userSnap.data()));
          AsyncStorage.setItem('userData', JSON.stringify(userSnap.data()));
          console.log('login:  ' + JSON.stringify(userSnap.data()));
        } else {
          SimpleToast.show('fail', 1);
        }
      })
      .catch(error => {
        SimpleToast.show(error.message);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Space Size={StatusBar.currentHeight} />
      <Header title={'Login'} />
      <Space Size={50} />
      <View style={styles.WelCome}>
        <Text style={styles.WelcomeTitle}>Welcome to</Text>
        <Text
          style={{
            maxWidth: '50%',
            color: Colors.SECONDARY_BLACK,
            fontFamily: 'Roboto-Medium',
            lineHeight: 20,
          }}>
          Enter your Email address for sign in,Enjoy your fodd
        </Text>
      </View>
      <InputField
        icon={
          <Icon
            name="email"
            size={22}
            color={'#666'}
            style={{marginRight: 10}}
          />
        }
        value={email}
        setValue={setEmail}
        label={'your email'}
      />

      <InputField
        icon={
          <Icon
            name="lock"
            size={22}
            color={'#666'}
            style={{marginRight: 10}}
          />
        }
        value={password}
        setValue={setPassword}
        label={'password'}
        isPassword={true}
      />
      <View style={styles.Remember_Forgot}>
        <Text style={{color: Colors.DEFAULT_GREY}}>Remember Me</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        label={'Sign In'}
        backgroundColor={Colors.DEFAULT_GREEN}
        onPress={() => handleLogin()}
      />
      <View style={styles.MovetoLogin}>
        <Text>Don't have any account?</Text>
        <TouchableOpacity
          style={{marginLeft: 7}}
          onPress={() => navigation.navigate('register')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.OR}>OR</Text>
      <CustomButton
        backgroundColor={Colors.FABEBOOK_BLUE}
        label={'Login With Facebook'}
        Icon={
          <Image
            source={require('../../assests/images/facebook.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        }
        onPress={() => {}}
      />
      <CustomButton
        backgroundColor={Colors.GOOGLE_BLUE}
        label={'Login With Facebook'}
        Icon={
          <Image
            source={require('../../assests/images/google.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        }
        onPress={() => {}}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  WelCome: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
  },
  WelcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.SECONDARY_BLACK,
  },
  Remember_Forgot: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MovetoLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  OR: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16.8,
    lineHeight: 40,
  },
});
export default LoginScreen;
