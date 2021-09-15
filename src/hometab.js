import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import {Platform, Dimensions} from 'react-native';

import Telamenu from './menu';
import MenuDrawer from './menudrawer';
import Teladicas from './Dicas';
import Telaperfil from './perfil';
import Telaeditarlogin from './editarlogin';
import Telaanuncio from './anuncio';
import Telapolitica from './politica';
import Telacriaranuncio from './criaranuncio';
import Telaveranuncio from './veranuncio';
import Telaatualizaranuncio from './atualizaranuncio';
import Teladelanuncio from './delanuncio';

const width = Dimensions.get('window').width

const DrawerConfig = {
    navigationOptions: ({ header: null}),
    drawerWidth: width*0.83,
    contentComponent: ({navigation}) => {
    return(<MenuDrawer navigation={navigation}/>)
    }
}
const HomeTabNavigator = createDrawerNavigator({
   Telamenu:{screen: Telamenu},
   Teladicas:{screen:Teladicas},
   Telaperfil:{screen:Telaperfil},
   Telaeditarlogin:{screen:Telaeditarlogin},
   Telaanuncio:{screen:Telaanuncio},
   Telapolitica:{screen:Telapolitica},
   Telacriaranuncio:{screen:Telacriaranuncio},
   Telaveranuncio:{screen:Telaveranuncio},
   Telaatualizaranuncio:{screen:Telaatualizaranuncio},
   Teladelanuncio:{screen:Teladelanuncio},
   
}, DrawerConfig);



export default HomeTabNavigator;
