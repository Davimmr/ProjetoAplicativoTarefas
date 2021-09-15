import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

import firebase from './firebaseconnection';

export default class telalogin extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      senhaInput: '',
    };

    this.logar = this.logar.bind(this);

    firebase.auth().signOut();

  }

  logar() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Usuarios').child(user.uid).once('value').then((snapshot) => {
          this.props.navigation.navigate('Telamenu')
        });
      }
    });

    firebase.auth().signInWithEmailAndPassword(
      this.state.emailInput,
      this.state.senhaInput,
    ).catch((error) => {
      alert(error.code);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 130, height: 150 }}
          source={require('projeto/images/icooon.png')}
        />
        <Text style={styles.logoText}>Bico Certo</Text>

        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={text => this.setState({ Email: text })}
          onChangeText={(emailInput) => this.setState({ emailInput })}
        />

        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={(senhaInput) => this.setState({ senhaInput })}
        />
        <TouchableOpacity style={styles.button} onPress={this.logar}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.cadastraTextCont}>
          <Text style={styles.cadastraText}>Não tem uma conta ainda?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Telacadastro')}><Text style={styles.cadastraButton}> Cadastrar</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#455a64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  cadastraTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  cadastraText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  cadastraButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
});
