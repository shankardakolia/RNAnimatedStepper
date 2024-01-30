import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';

const Stepper = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 85,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 85,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 85,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 50,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 0 ? 'green' : '#f2f2f2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>1</Text>
        </View>
        <View
          style={{
            width: 85,
            height: 6,
            backgroundColor: '#f2f2f2',
          }}></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 1 ? 'green' : '#f2f2f2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>2</Text>
        </View>
        <View
          style={{
            width: 85,
            height: 6,
            backgroundColor: '#f2f2f2',
          }}></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 2 ? 'green' : '#f2f2f2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>3</Text>
        </View>
        <View
          style={{
            width: 85,
            height: 6,
            backgroundColor: '#f2f2f2',
          }}></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 3 ? 'green' : '#f2f2f2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>4</Text>
        </View>
      </View>
      {/*=====================================*/}
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 100,
          position: 'absolute',
          left: 0,
          top: 10,
        }}>
        <Animated.View
          style={{
            width: progress1,
            height: 6,
            marginLeft: 30,
            marginTop: 10,
            backgroundColor: 'green',
          }}></Animated.View>

        <Animated.View
          style={{
            width: progress2,
            height: 6,
            marginTop: 10,
            marginLeft: 30,
            backgroundColor: 'green',
          }}></Animated.View>

        <Animated.View
          style={{
            width: progress3,
            height: 6,
            marginLeft: 30,
            marginTop: 10,
            backgroundColor: 'green',
          }}></Animated.View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 100,
          height: 50,
          width: 200,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          if (selectedStep == 1) {
            start1();
          }
          if (selectedStep == 2) {
            start2();
          }
          if (selectedStep == 3) {
            start3();
          }
          if (selectedStep == 0) {
            setSelectedStep(selectedStep + 1);
          } else {
            setTimeout(() => {
              setSelectedStep(selectedStep + 1);
            }, 3000);
          }
        }}>
        <Text>Next Step</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Stepper;
