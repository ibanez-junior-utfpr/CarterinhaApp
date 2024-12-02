
import React from 'react';
import { SafeAreaView } from 'react-native';
//import Primeiro from "./components/primeiro";
import SocioCad from "./components/socio_cad";
import Styles from "./components/estilos";

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <SocioCad />
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