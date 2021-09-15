import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
import firebase from './firebaseconnection';

export default class delanuncio extends Component {
  
  static navigationOptions = { title: 'Deletar Anuncio' };
  constructor() {
    super();
    this.state = {
      key: '',
      status: '',
      descricao: '',
      valor: '',
      titulo: [],
      titulo_selecionado: ""
    };

    this.deletaranuncio = this.deletaranuncio.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Tarefas').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          state.titulo = [];

          snapshot.forEach((childItem) => {
            state.titulo.push({
              key: childItem.key,
              titulo: childItem.val().titulo,
              status: (String(childItem.val().status)),
              descricao: childItem.val().descricao,
              valor: childItem.val().valor,
            });
          });
          this.setState(state);
        });
      }
    });
  }

  RetornarDadosAnuncio = ((titulo) => {
    this.state.titulo.map((item, index) => { 
      if (item.titulo == titulo) {
        //Atualizar os campos do formulario
        this.setState({titulo_selecionado: item.titulo, status: item.status, descricao: item.descricao, valor: item.valor, key: item.key});
      }
    });
  });

  deletaranuncio() {  
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref('Tarefas/').child(user.uid).child(this.state.key).remove();
    });
  }

  render() {
    return (
      <View style={styles.container} >

        <Text style={styles.logoText}>Deletar Anuncio</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.texto}>Titulo do Anuncio:</Text>
        <Picker
          selectedValue={this.state.titulo_selecionado}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => this.RetornarDadosAnuncio(itemValue)}>
          {this.state.titulo.map((item, index) => {
            return (
              <Picker.Item label={item.titulo} value={item.titulo} key={index} />
            );
          })}
        </Picker>
        <TouchableOpacity style={styles.button} onPress={() => this.deletaranuncio(this.state.key)}>
          <Text style={styles.buttonText}>Deletar Anuncio</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#455a64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  logoText: {
    marginVertical: 15,
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)'
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
  picker: {
    height: 50,
    width: 300,
    marginBottom: 10,
    color: '#FFF',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});