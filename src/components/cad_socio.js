/* Sócio - Cadastro (Administrador) */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraG}>Sócio - Cadastro</Text>
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
            <Entrada
                legenda="Endereço"
                aviso="Digite seu endereço"
                teclado="default"
                altura={100}
            />
            <Entrada
                legenda="Data/Nascimento"
                aviso="Digite DD/MM/AAAA"
                teclado="numeric"
            />
            <Text></Text>
            <Botao nome="Tirar Foto" />
            <Text></Text>
            <Botao nome="Confirma" />
        </View>
    );
}
