import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class listItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			msg:props.data.msg
		};

		this.click = this.click.bind(this);
	}

	click() {
		//alert("Clicou para abrir a conversa: "+this.props.data.key);
	}

	render() {
		return (
			<TouchableHighlight onPress={this.click} underlayColor="#648291">
				<View style={styles.item}>
					<Image source={{uri:this.props.data.img}} style={styles.imagem} />
					<View style={styles.info}>
						<Text numberOfLines={1} style={styles.nome}>{this.props.data.nome}</Text>
						<Text numberOfLines={1} style={styles.msg}>{this.state.msg}</Text>
					</View>
				</View>
			</TouchableHighlight>
			
		);
	}

}

const styles = StyleSheet.create({
	item:{
		height:60,
		marginLeft:40,
		marginRight:40,
		borderBottomWidth:1,
		borderColor:'black',
		flex:2,
		flexDirection:'row'
    },
	imagem:{
		width:40,
		height:40,
		marginTop:10,
		borderRadius:20
	},
	info:{
		flex:2,
		flexDirection:'column',
		justifyContent:'center',
        marginLeft:10,
        color:'lightgray',
	},
	nome:{
		fontSize:15,
        fontWeight:'bold',
        color:'lightgray',
	}
});















