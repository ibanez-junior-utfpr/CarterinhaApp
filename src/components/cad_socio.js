import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import firestore from '@react-native-firebase/firestore';

export default () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const validarCampos = () => {
        if (!nome || !email || !telefone || !endereco || !dataNascimento) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            console.log(nome);
            console.log(email);
            console.log(telefone);
            console.log(endereco);
            console.log(dataNascimento);
            console.log("PEDRAO");
            return false;
        }
    
        return true;
    };

    const onConfirma = async () => {
        console.log("oi")
        if (validarCampos()) {
            try {
                await firestore().collection('socio').add({
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    endereco: endereco,
                    dataNascimento: dataNascimento,
                });

                Alert.alert("Sucesso", "Dados gravados com sucesso!");

                // Limpar os campos após o envio
                setNome('');
                setEmail('');
                setTelefone('');
                setEndereco('');
                setDataNascimento('');
            } catch (error) {
                console.error("Erro ao gravar dados no Firebase: ", error);
                Alert.alert("Erro", "Ocorreu um erro ao salvar os dados.");
            }
        }
    };

    return (
        <View>
            <Text style={Estilos.letraG}>Sócio - Cadastro</Text>
            
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
            <Entrada
                legenda="Endereço"
                aviso="Digite seu endereço"
                teclado="default"
                altura={100}
                valor={endereco}
                setValor={setEndereco}
            />
            <Entrada
                legenda="Data/Nascimento"
                aviso="Digite DD/MM/AAAA"
                teclado="numeric"
                valor={dataNascimento}
                setValor={setDataNascimento}
            />

            <Text></Text>
            <Botao nome="Tirar Foto" />
            <Text></Text>
            <Botao nome="Confirma" onPress={onConfirma} />
        </View>
    );
};