
import React from "react";
import { SafeAreaView } from "react-native";
import Primeiro from "./components/primeiro";
import SocioCad from "./components/socio_cad";
import EmissaoQRCode from "./components/emissaoqrcode";
import LeituraQRCode from "./components/leituraqrcode";
import CadSocio from "./components/cad_socio";
import ExameMedico from "./components/examemedico";
//import Pesquisa from "./components/pesquisa";
import Estilos from "./components/estilos";

function App() {
  let opcao = 6
  return (
    <SafeAreaView style={Estilos.container}>
      { opcao === 1 ? <Primeiro /> : false }
      { opcao === 2 ? <SocioCad /> : false }
      { opcao === 3 ? <EmissaoQRCode /> : false }
      { opcao === 4 ? <CadSocio /> : false }
      { opcao === 5 ? <LeituraQRCode /> : false }
      { opcao === 6 ? <ExameMedico /> : false }
      { opcao === 7 ? <SocioCad /> : false }
      { opcao === 8 ? <SocioCad /> : false }
      { opcao === 9 ? <SocioCad /> : false }
      { opcao === 10 ? <SocioCad /> : false }
      { opcao === 11 ? <SocioCad /> : false }
      { opcao === 12 ? <SocioCad /> : false }
      { opcao === 13 ? <SocioCad /> : false }
      {/*
      <Pesquisa
        legenda="Sócio"
        nome="Pesquisa/Sócio"
        aviso="Pesquisa do sócio"
      />
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