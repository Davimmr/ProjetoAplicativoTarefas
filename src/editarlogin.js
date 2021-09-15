import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import firebase from './firebaseconnection';

export default class editarlogin extends Component {

  static navigationOptions = { title: 'Editar Login' };
  constructor(props) {
    super(props);
    this.state = {
      key: '',
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
      board: [],
    };

    this.editarlogin = this.editarlogin.bind(this);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Usuarios').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          state.board = [];

          snapshot.forEach((childItem) => {
            state.board.push({
              key: childItem.key,
              nome: childItem.val().nomeInput,
              data: childItem.val().dataInput,
              cpf: childItem.val().cpfInput,
              rg: childItem.val().rgInput,
              email: childItem.val().emailInput,
              senha: childItem.val().senhaInput,
              telefone: childItem.val().telefoneInput,
              nome_rua: childItem.val().nome_ruaInput,
              num_rua: childItem.val().num_ruaInput,
              bairro: childItem.val().bairroInput,
              cep: childItem.val().cepInput,
              cidade: childItem.val().cidadeInput,
            });
          });
          this.setState(state);
        });
      }
    });
  }


  componentDidMount() {
    let data;
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref("Usuarios").child(user.uid).on('value', (snapshot) => data = snapshot.val()) //poderia já setar o state aqui.)
      this.setState({
        nome: data,
        data: data,
        cpf: data,
        rg: data,
        email: data,
        senha: data,
        telefone: data,
        nome_rua: data,
        num_rua: data,
        bairro: data,
        cep: data,
        cidade: data,
      });
    });
  }

  editarlogin() {

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
        alert("Conta Atualizada com Sucesso!");      
        
       /* user.updateEmail(this.state.emailInput).ContinueWith(task => {
          if (task.ok) {
            this.props.navigation.navigate('TelaLogin');
          }*/
          if (user != null) {
            user.updateEmail(this.state.emailInput).ContinueWith(task => {
              if (task.IsCanceled) {
                Debug.LogError("UpdateEmailAsync was canceled.");
                return;
              }
              if (task.IsFaulted) {
                Debug.LogError("UpdateEmailAsync encountered an error: " + task.Exception);
                return;
              }
          
              this.props.navigation.navigate('TelaLogin');
            });
          }

          user.updatePassword(this.state.senhaInput);
      }
    });
    this.props.navigation.navigate('TelaLogin')
  }
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>

          <Text style={styles.logoText}>Atualizar Login</Text>
          <Text style={styles.texto}>Digite seu Nome:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Nome"
            value={this.state.nomeInput}
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
            value={this.state.dataInput}
            onChangeText={(dataInput) => this.setState({ dataInput })}
          />
          <Text style={styles.texto}>Digite seu CPF:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="000.000.00-00"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="number-pad"
            value={this.state.cpfInput}
            onChangeText={(cpfInput) => this.setState({ cpfInput })}
          />
          <Text style={styles.texto}>Digite seu RG:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="00.000.000-0"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="number-pad"
            value={this.state.rg}
            onChangeText={(rgInput) => this.setState({ rgInput })}
          />
          <Text style={styles.texto}>Digite seu Email:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Este será seu Email/Login"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={(emailInput) => this.setState({ emailInput })}
          />
          <Text style={styles.texto}>Digite sua Senha:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Esta será sua Senha para Login"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            value={this.state.senha}
            onChangeText={(senhaInput) => this.setState({ senhaInput })}
          />
          <Text style={styles.texto}>Digite seu Endereço:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Digite sua Rua"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            value={this.state.nome_rua}
            onChangeText={(enderecoInput) => this.setState({ enderecoInput })}
          />
          <Text style={styles.texto}>Digite o Nº da Casa:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Nº da Casa"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            value={this.state.num_rua}
            onChangeText={(numInput) => this.setState({ numInput })}
          />
          <Text style={styles.texto}>Digite seu Telefone:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="(00)1111-0000"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            value={this.state.telefone}
            onChangeText={(telefoneInput) => this.setState({ telefoneInput })}
          />
          <Text style={styles.texto}>Digite seu Bairro:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Bairro"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            value={this.state.bairro}
            onChangeText={(bairroInput) => this.setState({ bairroInput })}
          />
          <Text style={styles.texto}>Digite seu CEP:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="00.000-00"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="phone-pad"
            value={this.state.cep}
            onChangeText={(cepInput) => this.setState({ cepInput })}
          />
          <Text style={styles.texto}>Digite sua Cidade:</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Cidade"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            value={this.state.cidade}
            onChangeText={(cidadeInput) => this.setState({ cidadeInput })}
          />
          <TouchableOpacity style={styles.button} onPress={this.editarlogin}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
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
  cadastraButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
});
