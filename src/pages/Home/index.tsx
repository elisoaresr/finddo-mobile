import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

interface Item {
  id: number,
  name: string,
  url: string
}

const Home = () => {
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Ações</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingBottom: 10
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },
  
  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,

  },

});


export default Home;