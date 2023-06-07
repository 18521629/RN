import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

const App = () => {
  const animatedValue = new Animated.Value(0);
  console.log('animatedValue', animatedValue);
  let currentValue = 0;

  animatedValue.addListener(({value}) => {
    currentValue = value;
    console.log('animatedValue', animatedValue);
  });

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          RN Flip Image Horizontally using Animation
        </Text>
        <Animated.Image
          source={{
            uri: 'https://img.favpng.com/22/13/25/firebird-phoenix-logo-png-favpng-GK890exY10ywdicewxDE74JUq.jpg',
          }}
          style={[rotateYAnimatedStyle, styles.imageStyle]}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={flipAnimation}>
          <Text style={styles.buttonStyle}>Click here to Flip the Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
});

export default App;
