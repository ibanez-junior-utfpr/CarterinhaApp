/* Entrada Padrão */

import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default (props) => {
    return (
        <View>
            <Text style={estilo.legenda}>{props.legenda}</Text>
            <TextInput
                style={estilo.entrada}
                placeholder={props.aviso}
                keyboardType={props.teclado}
                height={props.altura}
                secureTextEntry={props.senha}
            />
        </View>
    );
}

const estilo = StyleSheet.create({
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
});
