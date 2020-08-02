import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        <View>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;