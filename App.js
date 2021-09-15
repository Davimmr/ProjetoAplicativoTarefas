import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Telalogin from './src/telalogin';
import Telacadastro from './src/cadastrologin';
import Hometab from './src/hometab';
import Teladicas from './src/Dicas';
import Telacriaranuncio from './src/criaranuncio';
import Telaatualizaranuncio from './src/atualizaranuncio';
import Teladelanuncio from './src/delanuncio';
import Telaeditarlogin from './src/editarlogin';
import Telapolitica from './src/politica';

const AppNavigator = createStackNavigator({
   Telalogin:{screen:Telalogin}, 
   Telacadastro:{screen:Telacadastro},
   Hometab:{screen:Hometab},
   Teladicas:{screen:Teladicas},
   Telaatualizaranuncio:{screen:Telaatualizaranuncio},
   Teladelanuncio:{screen:Teladelanuncio},
   Telacriaranuncio:{screen:Telacriaranuncio},
   Telaeditarlogin:{screen:Telaeditarlogin},
   Telapolitica:{screen:Telapolitica},
}/*, {defaultNavigationOptions: {
   header:null
}}*/);

export default createAppContainer(AppNavigator);
