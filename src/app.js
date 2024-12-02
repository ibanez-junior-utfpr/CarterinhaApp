
import React from 'react';
import { SafeAreaView } from 'react-native';
//import Primeiro from "./components/primeiro";
//import SocioCad from "./components/socio_cad";
import EmissaoQRCode from "./components/emissaoqrcode";
import Estilos from "./components/estilos";

function App() {
  return (
    <SafeAreaView style={Estilos.container}>
      <EmissaoQRCode />
      {/* <SocioCad /> */}
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