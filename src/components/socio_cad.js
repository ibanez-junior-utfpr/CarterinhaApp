/* Sócio - Cadastro (Primeiro Acesso) */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraG}>Sócio - Cadastro</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Nome"
                aviso="Digite seu nome"
                teclado="default"
            />
            <Entrada
                legenda="E-Mail"
                aviso="Digite seu email"
                teclado="default"
            />
            <Entrada
                legenda="Telefone"
                aviso="Digite seu telefone"
                teclado="numeric"
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Confirma" />
        </View>
    );
}
