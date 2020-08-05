import React, { useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../../assets/img/pok.png')}
      style={styles.container}
    >

      <View style={styles.main}>
        <View>
          <Image style={styles.logo} source={require('../../../assets/img/logo.png')} />
          <Text style={styles.title}>Catalogando pokémons</Text>
          <Text style={styles.description}>Captura de póks</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => { }}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => { }}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.RegisterText}>Criar conta gratuita</Text>
      </TouchableOpacity>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 45
  },

  main: {
    flex: 1,
    justifyContent: 'center'
  },

  logo: {
    width: 230,
    height: 200
  },

  title: {
    color: '#322153',

  },
  description: {
    color: '#6C6C80',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    borderRadius: 12,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  submitText: {
    color: '#FFF',
    fontSize: 18
  },

  btnRegister: {
    marginTop: 10,

  },
  RegisterText: {
    color: '#000000'
  }
});

export default Home;


