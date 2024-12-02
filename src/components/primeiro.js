/* Primeiro Acesso */

import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import Styles from "./estilos";
import Botao from './botao';

export default () => {
    return (
        <View>
            <Image
                style={Styles.logo}
                source={require("../images/logo.png")}
            />
            <Text style={Styles.letraG}>Carteirina de Clube</Text>
            <Text style={Styles.letraM}>O que você é ?</Text>
            <Botao nome="Sócio" />
            <Text style={Styles.letraM}>Ou</Text>
            <Botao nome="Administrador" />
        </View>
    );
}
