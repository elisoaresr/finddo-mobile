import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import '../../config/statusBarConfig';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA'
  }
});


export default Home;