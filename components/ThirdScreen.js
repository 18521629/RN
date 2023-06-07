// How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {Text, View, StyleSheet, Image} from 'react-native';

const ThirdScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Content Loaded from Third Screen
      </Text>
      <Image
        style={styles.logoStyle}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoStyle: {
    height: 50,
    width: 50,
  },
});

export default ThirdScreen;