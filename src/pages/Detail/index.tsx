import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = () => {
  return(
    <View style={styles.container}>
      <Text>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Detail;