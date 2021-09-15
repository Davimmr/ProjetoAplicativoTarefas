import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class menudrawer extends Component {
    static navigationOptions = { header: null };
  
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                {<Image style={styles.img} source={require('projeto/images/icooon.png')} />}
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Bico Certo</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLink('Telamenu', 'Home')}
                        {this.navLink('Telaanuncio', 'Anuncio')}
                        {this.navLink('Telaperfil', 'Perfil')}
                        {this.navLink('Teladicas', 'Dicas de Segurança')}
                        {this.navLink('Telalogin', 'Sair', () => firebase.auth().signOut())}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.descricao}>Todos Direitos Reservados ©</Text>
                    <Text style={styles.versao}>v1.0</Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    scroll: {

    },
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    topLinks: {
        height: 160,
        backgroundColor: '#455a64',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'

    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },

    imgView: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    versao: {
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',

    },
    descricao: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
});
