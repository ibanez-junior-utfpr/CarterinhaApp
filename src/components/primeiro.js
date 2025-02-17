/* Primeiro Acesso */

import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation(); 
    return (
        <View>
            <Image
                style={Estilos.logo}
                source={require("../images/logo.png")}
            />
            <Text style={Estilos.letraG}>Carteirina de Clube</Text>
            <Text style={Estilos.letraM}>O que você é ?</Text>
            <Botao
                nome="Sócio" 
                onPress={() => navigation.navigate("Socio_Cadastro")}
            />
            <Text style={Estilos.letraM}>Ou</Text>
            <Botao
                nome="Administrador"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}
