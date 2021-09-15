import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Modal, Button } from 'react-native';

import Icon from 'react-native-ionicons'
import firebase from './firebaseconnection';

export default class veranuncio extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      list: [],
    };

    const eventKey = '-LeoWXUuntLR8Dc_hTIW';
    const rootRef = firebase.database().ref();
    const attendeesRef = rootRef.child('Tarefas');
    const userRef = rootRef.child('Usuarios');

    function getUsersAtEvent(key, cb) {

      attendeesRef.child(key).on('child_added', snap => {
        let userRef = userRef.child(snap.key);
        userRef.once('value', cb);
      });
    }
    getUsersAtEvent(eventKey, snap => console.log(snap.val()));
    //attendeesRef.child(eventKey).once('value', snap => console.log(snap.val()))

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);

    /*firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Usuarios').on('value', (snapshot) => {
          let state = this.state;
          state.list = [];

          snapshot.forEach((childItem) => {
            state.list.push({
              key: childItem.key,
              titulo: childItem.val().titulo,
              nome: childItem.val().nome,
            });
          });
          this.setState(state);
        });
      }
    });*/
  }

  abrirModal() {
    let s = this.state;
    s.modalVisible = true;
    this.setState(s);
  }

  fecharModal() {
    let s = this.state;
    s.modalVisible = false;
    this.setState(s);
  }

  static navigationOptions = { title: 'Anuncios' };
  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-menu"
          color="#000000"
          size={40}
          style={styles.menuIcon}
          onPress={() => { this.props.navigation.toggleDrawer() }} />

        <Modal animationType='fade' visible={this.state.modalVisible} >
          <View style={styles.modal}>
            <Text styles={styles.tituloModal}>Tarefa {'\n'}</Text>
            <View styles={styles.styleItems}>

            </View>
            <Button title='Fechar' onPress={this.fecharModal} />
          </View>
        </Modal>
        <FlatList style={styles.flat}
          data={this.state.list}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight onPress={this.abrirModal} underlayColor="#648291">
                  <View style={styles.item}>
                    <View style={styles.info}>
                      <Text numberOfLines={1} style={styles.nome}>{item.nome}</Text>
                      <Text numberOfLines={1} style={styles.msg}>{item.titulo}</Text>
                    </View>
                  </View>
                </TouchableHighlight>

              </View>
            );
          }}
        />
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
  flat: {
    paddingTop: 50,
  },
  item: {
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    flex: 2,
    flexDirection: 'row'
  },
  info: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    color: 'lightgray',
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'lightgray',
  },
  modal: {
    height: 200,
    width: 400,
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  tituloModal: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center'
  },
  styleItems: {
    alignItems: 'flex-start',
    marginLeft: 10,
    padding: 10
  }
});
