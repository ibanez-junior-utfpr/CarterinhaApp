/* Troca Senha (Administrador) */

import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import { useNavigation } from "@react-navigation/native";
import RNFS from 'react-native-fs';
import CryptoJS from 'crypto-js';

export default () => {
    const navigation = useNavigation();
    const [ senha, setSenha ] = useState("");
    const [ confirmacao, setConfirmacao ] = useState("");

    const salvaSenha = () => {
        if (senha === confirmacao) {
            gravarSM();
            navigation.navigate("MenuAdmin");
        } else {
            Alert.alert("Aviso", "Senhas não conferem, verifique");
        }
    };

    const gravarSM = async () => {
        const hash = CryptoJS.SHA512(senha).toString(CryptoJS.enc.Hex);
        const path = `${RNFS.DocumentDirectoryPath}/carteirinha_sm.json`;
        try {
            // Escreva o arquivo JSON no sistema de arquivos
            await RNFS.writeFile(path, hash, 'utf8');
        } catch (error) {
            Alert.alert('Erro', 'Falha ao salvar o arquivo JSON');
            console.error(error);
        }
    };
    return (
        <View>
            <Text style={Estilos.letraG}>Troca Senha</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Senha"
                aviso="Digite sua senha"
                senha={true}
                teclado="default"
                valor={senha}
                setValor={setSenha}
            />
            <Entrada
                legenda="Confirmação"
                aviso="Digite sua confirmação"
                senha={true}
                teclado="default"
                valor={confirmacao}
                setValor={setConfirmacao}
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Confirma" onPress={salvaSenha}/>
        </View>
    );
}
