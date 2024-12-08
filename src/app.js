
import React from 'react';
import { SafeAreaView } from 'react-native';
//import Primeiro from "./components/primeiro";
//import SocioCad from "./components/socio_cad";
//import EmissaoQRCode from "./components/emissaoqrcode";
import CadSocio from "./components/cad_socio";
// import Pesquisa from "./components/pesquisa";
import Estilos from "./components/estilos";

function App() {
  return (
    <SafeAreaView style={Estilos.container}>
      <CadSocio />
      {/*
      <Pesquisa
        legenda="Sócio"
        nome="Pesquisa/Sócio"
        aviso="Pesquisa do sócio"
      />
      <EmissaoQRCode />
      <SocioCad /> 
      <Primeiro /> 
      */}
    </SafeAreaView>
  );
}

export default App;

/*
    <SafeAreaView>
      <Text>Carterinha App Vazia</Text>
      <Text>Mas nem tão vazia assim</Text>
    </SafeAreaView>
*/