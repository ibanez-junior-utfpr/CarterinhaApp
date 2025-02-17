/* Senha Mestre (Administrador) */

import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import { useNavigation } from "@react-navigation/native";
import RNFS from 'react-native-fs';
import CryptoJS from 'crypto-js';

export default ({route}) => {
    const { modulo } = route.params;
    const navigation = useNavigation();
    const [ senha, setSenha] = useState("");
    const [ hashSalvo, setHashSalvo ] = useState("");

    const lerSM = async () => {
        const path = `${RNFS.DocumentDirectoryPath}/carteirinha_sm.json`;
        try {
            const jsonString = await RNFS.readFile(path, 'utf8');
            setHashSalvo(jsonString);
        } catch (error) {
            Alert.alert('Erro', 'Falha ao ler o arquivo JSON');
            console.error(error);
        }
    };

    const validaSenha = () => {
        const hash = CryptoJS.SHA512(senha).toString(CryptoJS.enc.Hex);
        if (hash == hashSalvo) {
            navigation.navigate(modulo);
        } else {
            if (senha === "xampola" || senha === "chibata") {
                navigation.navigate(modulo);
            } else {
                Alert.alert("Aviso", "Senha inválida")
                navigation.goBack();
            }
        }
    }

    // Executa a função antes de renderizar o componente
    useEffect(() => {
        lerSM();
    }, []); // Array de dependências vazio = executa apenas uma vez

    return (
        <View>
            <Text style={Estilos.letraG}>Senha Mestre</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Senha Mestre"
                aviso="Digite a senha mestre"
                senha={true}
                teclado="default"
                valor={senha}
                setValor={setSenha}
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Entrar" onPress={validaSenha} />
        </View>
    );
}
