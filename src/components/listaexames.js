/* Listagem de Exames */

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';

export default (props) => {
    // Dados fictícios de exames médicos
    const exames = [
        { id: '1', data: '10/01/2021', descricao: 'Aprovado' },
        { id: '2', data: '10/07/2021', descricao: 'Aprovado' },
        { id: '3', data: '10/01/2022', descricao: 'Aprovado' },
        { id: '4', data: '10/07/2022', descricao: 'Reprovado' },
        { id: '5', data: '15/08/2022', descricao: 'Aprovado' },
        { id: '6', data: '15/02/2023', descricao: 'Aprovado' },
        { id: '7', data: '15/08/2023', descricao: 'Aprovado' },
    ];
    return (
        <View>
            <Text style={Estilos.letraG}>Lista de Exames</Text>
            <Text style={Estilos.letraG}></Text>
            <FlatList
                data={exames}
                renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.exameData}>{item.data}</Text>
                    <Text style={styles.exameDescricao}>{item.descricao}</Text>
                </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <Botao nome="Voltar" />
        </View>
    );
}
const styles = StyleSheet.create({

    itemContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // Para Android
    },
    exameData: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    exameDescricao: {
        fontSize: 14,
        color: '#555',
        marginLeft: 15,
    },
});
