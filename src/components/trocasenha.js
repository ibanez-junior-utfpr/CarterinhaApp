/* Troca Senha (Administrador) */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraG}>Troca Senha</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Senha"
                aviso="Digite sua senha"
                senha={true}
                teclado="default"
            />
            <Entrada
                legenda="Confirmação"
                aviso="Digite sua confirmação"
                senha={true}
                teclado="default"
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Confirma" />
        </View>
    );
}
