import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from './firebaseconnection';
import Icon from 'react-native-ionicons';

export default class perfil extends Component {
  static navigationOptions = { header: null };
  
  constructor() {
    super();
    this.state = {
    };
    this.deletalogin = this.deletalogin.bind(this);
  }

  deletalogin() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Tarefas').child(user.uid).remove();
        firebase.database().ref('Usuarios').child(user.uid).remove();
        firebase.auth().currentUser.delete();
      }

      this.props.navigation.navigate('Telalogin')
    });
  }
  static navigationOptions = { title: 'Perfil' };
  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-menu"
          color="#000000"
          size={40}
          style={styles.menuIcon}
          onPress={() => { this.props.navigation.toggleDrawer() }} />

        <TouchableOpacity style={styles.button} onPress={_ => this.props.navigation.navigate('Telaeditarlogin')}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.deletalogin}>
          <Text style={styles.buttonText}>Desativar Conta</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    justifyContent: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0
  },
  menu: {
    fontSize: 30,
    color: '#fff',
  },
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: 40,
    left: 20,
    color: 'white',
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    marginLeft: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});
