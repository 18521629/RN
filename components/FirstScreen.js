// React Native Global Scope Variables
// https://aboutreact.com/react-native-global-scope-variables/

import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const FirstPage = ({navigation}) => {
  global.MyVar = 'https://aboutreact.com';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the First Page of the App
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
              color: 'red',
            }}>
            Value of Global Variable is: {global.MyVar}
          </Text>
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Global Scope Variables
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;