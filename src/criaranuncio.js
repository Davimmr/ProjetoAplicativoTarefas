import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import firebase from './firebaseconnection';

export default class criaranuncio extends Component {
  
  static navigationOptions = { title: 'Criar Anuncio' };
  constructor(props) {
    super(props);
    this.state = {
      tituloInput:'',
      descInput:'',
      valorInput: '',
      status: 0,
    };
    this.cadastroanuncio = this.cadastroanuncio.bind(this);

  }

  cadastroanuncio() {
    if (this.state.tituloInput.length > 0) {
      firebase.auth().onAuthStateChanged((user) => {
        let Tarefas = firebase.database().ref('Tarefas').child(user.uid);
        
        let chave = Tarefas.push().key;
          Tarefas.child(chave).set({
          titulo:this.state.tituloInput,
          descricao:this.state.descInput,
          valor:this.state.valorInput,
          status:this.state.status,
        });
      }); 
      alert("Tarefa Criada");
    }
  }

  render() {
    return (
        <View style={styles.container}>

          <Text style={styles.logoText}>Criar um Anuncio</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.texto}>Titulo do Anuncio:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Titulo"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(tituloInput) => this.setState({ tituloInput })}
          />
          <Text style={styles.texto}>Descrição do Anuncio:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Descrição"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(descInput) => this.setState({ descInput })}
          />
          <Text style={styles.texto}>Valor do Anuncio:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="R$0000,00"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="number-pad"
            onChangeText={(valorInput) => this.setState({ valorInput })}
          />
          
          <TouchableOpacity style={styles.button} onPress={this.cadastroanuncio}>
            <Text style={styles.buttonText}>Criar Anuncio</Text>
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
  endnum: {
    flexDirection:'row',
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
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
  cadastraButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
});
