import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-ionicons'

export default class politica extends Component {

    static navigationOptions = { title: 'Politica de Privacidade' };
    render() {
        return (
            <View style={styles.container}>
                <Icon name="md-menu"
                    color="#000000"
                    size={40}
                    style={styles.menuIcon}
                    onPress={() => { this.props.navigation.toggleDrawer() }} />

                <Text style={styles.logoText}>Politica de Privacidade</Text>
                <ScrollView style={{ flex: 2, top: 70, marginBottom: 40 }}>
                    <View style={styles.textos}>
                        <Text style={styles.Text}>Dados pessoais são...</Text>
                        <Text style={styles.Text}>• A identidade do consumidor, informações de contato, idade, localização e gênero. Os aplicativos que eles utilizam, os sites que visitam e com que freqüência. Uma lista de amigos e o conteúdo que compartilham uns com os outros. Os bens e serviços que eles compraram, de quem, quando e por quanto.</Text>
                        <Text style={styles.Text}>Uma informação particularmente sensível</Text>
                        <Text style={styles.Text}>• Informações de faturamento, como detalhes de cartão de crédito ou de conta bancária. O contato que os usuários tiveram com as práticas de saúde e instituições do estado. Identificadores biométricos como impressão digital e ID de retina. Essas informações devem ser coletadas e compartilhadas apenas com o consentimento expresso do usuário e somente se isso ajudar o aplicativo a executar a função esperada dele.</Text>
                        <Text>{'\n'} {'\n'}</Text>
                    </View>
                </ScrollView>      
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    textos: {
        marginLeft: 40,
        marginRight: 40,
    },
    logoText: {
        left: 80,
        top: 45,
        fontSize: 24,
        color: 'white',
    },
    Text: {
        justifyContent: 'center',
        paddingVertical: 8,
        color: 'rgba(255,255,255,0.6)',
        fontSize: 18,
    },
});
