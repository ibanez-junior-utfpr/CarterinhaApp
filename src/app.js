import React from "react";
import { SafeAreaView } from "react-native";
import Primeiro from "./components/primeiro";
import SocioCad from "./components/socio_cad";
import EmissaoQRCode from "./components/emissaoqrcode";
import LeituraQRCode from "./components/leituraqrcode";
import CadSocio from "./components/cad_socio";
import ExameMedico from "./components/examemedico";
import ListaExames from "./components/listaexames";
import Login from "./components/login";
import SenhaMestre from "./components/senhamestre";
import CadAdmin from "./components/cad_admin";
import TrocaSenha from "./components/trocasenha";
import MenuAdmin from "./components/menuadmin";
import Estilos from "./components/estilos";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCim6VcOhNgUbtapIman77-xCNOESOckl0",
  authDomain: "carteirinha-22949.firebaseapp.com",
  projectId: "carteirinha-22949",
  storageBucket: "carteirinha-22949.appspot.com",
  messagingSenderId: "997863903050",
  appId: "1:997863903050:web:b25d5a3d0f750cf7360038",
  measurementId: "G-V2K9TQ5F2M",
  databaseURL: "https://carteirinha-22949.firebaseio.com", 
};

// inicialização
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  
} else {
  firebase.app();  
}

// funciona porraaaaaaaaaaaaaaa
async function salvarDados() {
  try {
    await firestore().collection('users').add({
      nome: 'João',
      idade: 30,
    });
    console.log('Dados salvos!');
  } catch (error) {
    console.error('Erro ao salvar dados: ', error.message);
  }
}


function App() {
  const Stack = createNativeStackNavigator();
  //salvarDados();
  
/*   let opcao = 8;
  return (
    <SafeAreaView style={Estilos.container}>
      {opcao === 1 ? <Primeiro /> : false}
      {opcao === 2 ? <SocioCad /> : false}
      {opcao === 3 ? <EmissaoQRCode /> : false}
      {opcao === 4 ? <CadSocio /> : false}
      {opcao === 5 ? <LeituraQRCode /> : false}
      {opcao === 6 ? <ExameMedico /> : false}
      {opcao === 7 ? <ListaExames /> : false}
      {opcao === 8 ? <Login /> : false}
      {opcao === 9 ? <SenhaMestre /> : false}
      {opcao === 10 ? <CadAdmin /> : false}
      {opcao === 11 ? <TrocaSenha /> : false}
      {opcao === 12 ? <MenuAdmin /> : false}
      {opcao === 13 ? <SocioCad /> : false}
    </SafeAreaView>
  );
 */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Primeiro} />
        <Stack.Screen name="Socio_Cadastro" component={SocioCad} />
        <Stack.Screen name="Cadastro_Socio" component={CadSocio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadAdmin" component={CadAdmin} />
        <Stack.Screen name="MenuAdmin" component={MenuAdmin} />
        <Stack.Screen name="TrocaSenha" component={TrocaSenha} />
        <Stack.Screen name="SenhaMestre" component={SenhaMestre} />
        <Stack.Screen name="LeituraQRCode" component={LeituraQRCode} />
        <Stack.Screen name="EmissaoQRCode" component={EmissaoQRCode} />
        <Stack.Screen name="ExameMedico" component={ExameMedico} />
        <Stack.Screen name="ListaExames" component={ListaExames} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;