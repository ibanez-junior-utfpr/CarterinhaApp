import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacao, setConfirmacao] = useState("");

    const validarCampos = () => {
        if (!nome || !email || !telefone || !login || !senha || !confirmacao) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return false;
        }

        if (senha !== confirmacao) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return false;
        }

        return true;
    };

    const onConfirma = async () => {
        if (validarCampos()) {
            try {
                await firestore().collection('admin').add({
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    login: login,
                    senha: senha, 
                });

                Alert.alert("Sucesso", "Administrador cadastrado com sucesso!");

        
                setNome('');
                setEmail('');
                setTelefone('');
                setLogin('');
                setSenha('');
                setConfirmacao('');
            } catch (error) {
                console.error("Erro ao gravar dados no Firebase: ", error);
                Alert.alert("Erro", "Ocorreu um erro ao salvar os dados.");
            }
        }
    };

    return (
        <View>
            <Text style={Estilos.letraM}>Administrador - Cadastro</Text>

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
                legenda="Login"
                aviso="Digite seu login"
                teclado="default"
                valor={login}
                setValor={setLogin}
            />
            <Entrada
                legenda="Senha"
                aviso="Digite sua senha"
                senha={true}
                teclado="default"
                valor={senha}
                setValor={setSenha}
            />
            <Entrada
                legenda="Digite sua senha novamente"
                aviso="Digite sua senha"
                senha={true}
                teclado="default"
                valor={confirmacao}
                setValor={setConfirmacao}
            />

            <Text style={Estilos.letraM}></Text>
            <Botao nome="Confirma" onPress={onConfirma} />
            <Botao nome="Voltar" onPress={() => {navigation.navigate("Login")} } />
        </View>
    );
};