/* Botão Padrão */

import React from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default (props) => {
    return (
        <TouchableOpacity style={estilo.botaoAmarelo} onPress={props.onPress}>
            <Text style={estilo.botaoTexto}>{props.nome}</Text>
        </TouchableOpacity>
    );
};

const estilo = StyleSheet.create({
    botaoAmarelo: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'yellow'
    },
    botaoTexto: {
        fontSize: 40,
        textAlign: "center"
    },
});
