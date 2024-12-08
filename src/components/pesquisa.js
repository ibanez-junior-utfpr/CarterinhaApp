/* Pesquisa Padrão */

import React, { Fragment } from "react";
import { Text, TextInput, TouchableOpacity, Image, StyleSheet, View, Alert } from "react-native";

export default (props) => {
    return (
        <View style={estilo.linha}>
            <View style={estilo.container}>
                <Text style={estilo.legenda}>{props.legenda}</Text>
                <TextInput
                    style={estilo.entrada}
                    placeholder={props.aviso}
                    keyboardType={props.teclado}
                    height={props.altura}
                />
            </View>
            <Text></Text>
            <TouchableOpacity style={estilo.botaoAmarelo}
                onPress={() => {Alert.alert('Pressionou o botão: ' + props.nome)}}>
                <Image style={estilo.botaoIcone} source={require('../images/pesquisa.png')} />
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    botaoAmarelo: {
        marginTop: 22,
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'yellow'
    },
    botaoIcone: {
        width: 28,
        height: 28
    },
    entrada: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: 'yellow',
        fontSize: 20
    },
    legenda: {
        fontSize: 12,
        textAlign: "left",
        paddingTop: 10,
        paddingLeft: 12
    },
    linha: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    container: {
        flexDirection: "column"
    }
});
