/* Menu Administrador */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraG}>Menu Administrador</Text>
            <Text style={Estilos.letraM}></Text>
            <Botao nome="Sócio" />
            <Text style={Estilos.letraM}></Text>
            <Botao nome="Exame Médico" />
            <Text style={Estilos.letraM}></Text>
            <Botao nome="Troca Senha" />
        </View>
    );
}
