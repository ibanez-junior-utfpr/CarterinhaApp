/* Sócio - Cadastro (Primeiro Acesso) */

import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import RNFS from "react-native-fs";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation(); 
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const arquivoCarteirinha = async () => {
        const caminho = `${RNFS.DocumentDirectoryPath}/carteirinha.json`;
        try {
            const arquivo = await RNFS.readFile(caminho, 'utf8');
            const dados = JSON.parse(arquivo);
            setNome(dados.nome);
            setEmail(dados.email);
            setTelefone(dados.telefone);
        } catch (error) {
            Alert.alert("Aviso", "Arquivo: carteirinha.json não encontrado!!! Criando um novo");
            console.log(error);
        }
    };

    // Executa a função antes de renderizar o componente
    useEffect(() => {
        arquivoCarteirinha();
    }, []); // Array de dependências vazio = executa apenas uma vez

    const salvarDados = async () => {
        // Defina o caminho onde o arquivo será salvo
        const path = `${RNFS.DocumentDirectoryPath}/carteirinha.json`;
        try {
            // Verifica se o arquivo existe
            const arquivoExiste = await RNFS.exists(path);
      
            if (arquivoExiste) {
              // Apaga o arquivo
              await RNFS.unlink(path);
            } else {
              Alert.alert('Erro', 'Arquivo não encontrado.');
            }
        } catch (erro) {
            Alert.alert('Erro', 'Ocorreu um erro ao apagar o arquivo.');
            console.error(erro);
        }
        try {
            // Crie um objeto JSON
            const dados = {
                nome: nome,
                email: email,
                telefone: telefone
            }
            console.log(dados);
            // Converta o objeto JSON para uma string
            const jsonString = JSON.stringify(dados, null, 2);
            // Escreva o arquivo JSON no sistema de arquivos
            await RNFS.writeFile(path, jsonString, 'utf8');
            navigation.navigate("EmissaoQRCode", { dados: JSON.stringify(dados) });
        } catch (error) {
            Alert.alert('Erro', 'Falha ao salvar o arquivo JSON');
            console.error(error);
        }
    };

    return (
        <View>
            <Text style={Estilos.letraG}>Sócio - Cadastro</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Nome"
                aviso="Digite seu nome"
                teclado="default"
                valor={nome}
                setValor={setNome}
            />
            <Entrada
                legenda="E-Mail"
                aviso="Digite seu email"
                teclado="default"
                valor={email}
                setValor={setEmail}
            />
            <Entrada
                legenda="Telefone"
                aviso="Digite seu telefone"
                teclado="numeric"
                valor={telefone}
                setValor={setTelefone}
            />
            <Text style={Estilos.letraG}></Text>
            <Botao
                nome="Confirma"
                onPress={salvarDados}
            />
        </View>
    );
}
