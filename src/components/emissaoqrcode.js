
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Botao from "./botao";
import Estilos from "./estilos";
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from "@react-navigation/native";

export default ({ route }) => {
  const { dados } = route.params;
  const navigation = useNavigation(); 
  
  console.log(dados);
  return (
    <SafeAreaView style={Estilos.container}>
        <Text style={Estilos.letraG}>Emissão QRCode</Text>
        <View style={{paddingVertical: 20}}>
          <QRCode  value={dados} size={300} />
        </View>
        <Botao
          nome="Cancelar"
          onPress={() => navigation.goBack()}
        />
    </SafeAreaView>
  );
}
