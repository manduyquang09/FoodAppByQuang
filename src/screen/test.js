import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Space} from '../components';
import {Height} from './../ultis/display';
// width 411.42857142857144  trắng1
//  height 683.4285714285714
//______________________________________
//  width 392.72727272727275   đen2
// height 753.4545454545455
const Test = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const width = windowWidth / 375;
  const height = windowHeight / 812;

  const [size1, setSize1] = useState('');
  useEffect(() => {
    console.log('width ' + windowWidth);
    console.log('height ' + windowHeight);
    if (windowWidth === 411.42857142857144) {
      setSize1('1');
    } else {
      setSize1('2');
    }
  }, []);
  const data = [{id: 1}, {id: 2}, {id: 3}];
  const Custom = () => {
    return (
      <View
        style={{
          borderRadius: 8,
          backgroundColor: 'black',
          padding: 16,
          width: 103 * width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="stretch"
          style={{
            width: 32,
            height: 32,
            padding: 2.667,
          }}
          source={require('../assests/images/Qc1.jpeg')}
        />
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        backgroundColor: size1 == '1' ? 'green' : 'yellow',
      }}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
      <Space Size={StatusBar.currentHeight} />
      <View
        style={{
          padding: 10,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 16 * width,
        }}>
        <Image
          style={{
            width: 32,
            height: 32,
          }}
          source={require('../assests/images/Qc1.jpeg')}
        />
        <View
          style={{
            flex: 1,
            height: 40 * height,
            backgroundColor: 'black',
          }}></View>
      </View>
      <Space Size={16 * height} />
      <Text
        style={{
          fontSize: 24,
          lineHeight: 30.72,
          backgroundColor: 'red',
        }}>
        Popular Categories
      </Text>
      <FlatList
        ItemSeparatorComponent={() => <Space width={16 * width} />}
        horizontal
        L
        data={data}
        renderItem={item => <Custom />}
        style={{paddingHorizontal: 16, backgroundColor: 'blue'}}
      />
    </ScrollView>
  );
};

export default Test;
