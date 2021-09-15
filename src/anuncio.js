import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-ionicons'

export default class anuncio extends Component {
  static navigationOptions = { header: null };
  //static navigationOptions = { title: 'Anuncios' };
  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-menu"
          color="#000000"
          size={40}
          style={styles.menuIcon}
          onPress={() => { this.props.navigation.toggleDrawer() }} /> 
        
        <TouchableOpacity style={styles.button} onPress={_ => this.props.navigation.navigate('Telacriaranuncio')}>
          <Text style={styles.buttonText}>Criar Anuncio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Telaveranuncio')}>
          <Text style={styles.buttonText}>Visualizar Anuncios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={_ => this.props.navigation.navigate('Telaatualizaranuncio')}>
          <Text style={styles.buttonText}>Atualizar Anuncio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={_ => this.props.navigation.navigate('Teladelanuncio')}>
          <Text style={styles.buttonText}>Deletar Anuncio</Text>
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
    marginLeft:30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});
