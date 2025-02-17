/* Entrada Padrão */

import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default (props) => {
    return (
        <View>
            <Text style={estilo.legenda}>{props.legenda}</Text>
            <TextInput
                style={[estilo.entrada, { height: props.altura, width: '100%' }]} 
                placeholder={props.aviso}
                keyboardType={props.teclado}
                secureTextEntry={props.senha} 
                value={props.valor} 
                onChangeText={props.setValor}
                scrollEnabled={true}
            />
        </View>
    );
};

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
