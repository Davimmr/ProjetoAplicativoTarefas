import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import firebase from './firebaseconnection';

export default class cadastrologin extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      nomeInput: '',
      dataInput: '',
      cpfInput: '',
      rgInput: '',
      emailInput: '',
      senhaInput: '',
      telefoneInput: '',
      enderecoInput: '',
      numInput: '',
      bairroInput: '',
      cepInput: '',
      cidadeInput: '',
    };

    this.cadastrologin = this.cadastrologin.bind(this);
    firebase.auth().signOut();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Usuarios').child(user.uid).set({
          nome: this.state.nomeInput,
          data: this.state.dataInput,
          cpf: this.state.cpfInput,
          rg: this.state.rgInput,
          email: this.state.emailInput,
          senha: this.state.senhaInput,
          telefone: this.state.telefoneInput,
          nome_rua: this.state.enderecoInput,
          num_rua: this.state.numInput,
          bairro: this.state.bairroInput,
          cep: this.state.cepInput,
          cidade: this.state.cidadeInput,
        });
        alert("Conta Criada com Sucesso!");
      }
    });
  }

  cadastrologin() {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.emailInput,
      this.state.senhaInput
    ).catch((error) => {
      alert(error.code);
    })

  }
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>

          <Text style={styles.logoText}>Cadastrar Login</Text>
          <Text style={styles.texto}>Digite seu Nome:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Nome"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(nomeInput) => this.setState({ nomeInput })}
          />
          <Text style={styles.texto}>Digite sua Data de Nascimento:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="00/00/0000"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType='number-pad'
            onChangeText={(dataInput) => this.setState({ dataInput })}
          />
          <Text style={styles.texto}>Digite seu CPF:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="000.000.00-00"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="number-pad"
            onChangeText={(cpfInput) => this.setState({ cpfInput })}
          />
          <Text style={styles.texto}>Digite seu RG:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="00.000.000-0"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="number-pad"
            onChangeText={(rgInput) => this.setState({ rgInput })}
          />
          <Text style={styles.texto}>Digite seu Email:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Este será seu Email/Login"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(emailInput) => this.setState({ emailInput })}
          />
          <Text style={styles.texto}>Digite sua Senha:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Esta será sua Senha para Login"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(senhaInput) => this.setState({ senhaInput })}
          />
          <Text style={styles.texto}>Digite seu Endereço:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Digite sua Rua"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(enderecoInput) => this.setState({ enderecoInput })}
          />
          <Text style={styles.texto}>Digite o Nº da Casa:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Nº da Casa"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            onChangeText={(numInput) => this.setState({ numInput })}
          />
          <Text style={styles.texto}>Digite seu Telefone:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="(00)1111-0000"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            onChangeText={(telefoneInput) => this.setState({ telefoneInput })}
          />
          <Text style={styles.texto}>Digite seu Bairro:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Bairro"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(bairroInput) => this.setState({ bairroInput })}
          />
          <Text style={styles.texto}>Digite seu CEP:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="00.000-00"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            onChangeText={(cepInput) => this.setState({ cepInput })}
          />
          <Text style={styles.texto}>Digite sua Cidade:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Cidade"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(cidadeInput) => this.setState({ cidadeInput })}
          />
          <TouchableOpacity style={styles.button} onPress={this.cadastrologin}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.cadastraTextCont}>
            <Text style={styles.cadastraText}>Já tem uma Conta?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.cadastraButton}> Entrar</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  scrollContainer: {
    flex: 1,
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
