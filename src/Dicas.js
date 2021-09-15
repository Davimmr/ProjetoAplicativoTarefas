import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-ionicons'

export default class Dicas extends Component {

    static navigationOptions = { title: 'Dicas' };
    render() {
        return (
            <View style={styles.container}>
                <Icon name="md-menu"
                    color="#000000"
                    size={40}
                    style={styles.menuIcon}
                    onPress={() => { this.props.navigation.toggleDrawer() }} />

                <Text style={styles.logoText}>Dicas de Segurança</Text>
                <ScrollView style={{ flex: 2, top: 70, marginBottom: 40 }}>
                    <View style={styles.textos}>
                        <Text style={styles.Text}>• Mesmo que o anunciante forneça a você informações e dados pessoais, isso não garante a sua veracidade/idoneidade.</Text>
                        <Text style={styles.Text}>• O anúncio parece bom demais para ser verdade (preço muito baixo, doações, etc).</Text>
                        <Text style={styles.Text}>• Não confie se alguém pede o número da sua conta bancária, cartão de crédito ou pede para enviar dinheiro ao exterior. Nunca clique em nenhum link de e-mails que vem de quem afirma ser um banco ou instituição financeira.</Text>
                        <Text style={styles.Text}>• O anunciante pressiona você para finalizar a compra.</Text>
                        <Text style={styles.Text}>• O anunciante envia mensagens com o português estranho. Exemplo: lindas cachorrinhas novos (parece um português falado por estrangeiros).</Text>
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
