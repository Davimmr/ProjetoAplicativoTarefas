import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
import firebase from './firebaseconnection';

export default class atualizaranuncio extends Component {

  static navigationOptions = { title: 'Atualizar' };
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
    this.cadastroanuncio = this.cadastroanuncio.bind(this);
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

  cadastroanuncio() {
    if (this.state.titulo.length > 0) {
      firebase.auth().onAuthStateChanged((user) => {
         firebase.database().ref('Tarefas').child(user.uid).child(this.state.key).set({
          titulo:this.state.titulo_selecionado,
          descricao:this.state.descricao,
          valor:this.state.valor,
          status:this.state.status,
        });
      }); 
      alert("Tarefa Atualizada");
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.logoText}>Selecione o Anuncio:</Text>
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

        <Text style={styles.texto}>Descrição do Anuncio:</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Descrição"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          value={this.state.descricao}
          onChangeText={(descricao) => this.setState({ descricao })}
        />
        <Text style={styles.texto}>Valor do Anuncio:</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="R$0000,00"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="number-pad"
          value={this.state.valor}
          onChangeText={(valor) => this.setState({ valor })}
        />
        <Text style={styles.texto}>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={styles.picker}
          onChangeText={(status) => this.setState({ status })}
          onValueChange={(itemValue, Index) =>
            this.setState({ status: itemValue })
          }>
          <Picker.Item label="Não Realizado" value="0" />
          <Picker.Item label="Realizado" value="1" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={this.cadastroanuncio}>
          <Text style={styles.buttonText}>Atualizar Anuncio</Text>
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
    flexDirection: 'row',
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
  picker: {
    height: 50,
    width: 300,
    marginBottom: 10,
    color: '#FFF',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});