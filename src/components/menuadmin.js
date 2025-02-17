/* Menu Administrador */

import React from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={Estilos.letraG}>Menu Administrador</Text>
            <Botao
                nome="Sócio"
                onPress={() => {navigation.navigate("Cadastro_Socio")}}
            />
            <Botao
                nome="Exame Médico"
                onPress={() => {navigation.navigate("ExameMedico")}}
            />
            <Botao
                nome="Troca Senha"
                onPress={() => {navigation.navigate("SenhaMestre", { modulo: "TrocaSenha" })}}
            />
            <Botao
                nome="Voltar"
                onPress={() => {navigation.navigate("Inicial")}}
            />
        </View>
    );
}
