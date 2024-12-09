/* Senha Mestre (Administrador) */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraG}>Senha Mestre</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Senha Mestre"
                aviso="Digite a senha mestre"
                senha={true}
                teclado="default"
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Entrar" />
        </View>
    );
}
