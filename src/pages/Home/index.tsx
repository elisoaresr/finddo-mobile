import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from 'axios'
import AuthContext from '../../contexts/auth';

const Home = () => {
  const [data, setData] = useState([]);
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Ações</Text>
      <Button title="Sign Out" onPress={handleSignOut} />


    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <Text style={styles.itemTitle}>Pokémons</Text>
    </TouchableOpacity>


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

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },
  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,

  },

});


export default Home;