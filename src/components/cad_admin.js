/* Administrador - Cadastro */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';

export default () => {
    return (
        <View>
            <Text style={Estilos.letraM}>Administrador - Cadastro</Text>
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
                legenda="Login"
                aviso="Digite seu login"
                teclado="default"
            />
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
            <Text style={Estilos.letraM}></Text>
            <Botao nome="Confirma" />
        </View>
    );
}
