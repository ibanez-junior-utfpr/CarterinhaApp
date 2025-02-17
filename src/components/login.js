import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import CheckBox from "react-native-check-box";
import TextLink from "react-native-text-link";
import firestore from '@react-native-firebase/firestore'; // Importando Firestore
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const [isCheckedLembrar, setStateLembrar] = useState(false);
    const [login, setLogin] = useState(""); // Armazenar o login
    const [senha, setSenha] = useState(""); // Armazenar a senha

    // Função para realizar o login verificando no Firestore
    const realizarLogin = async () => {
        if (!login || !senha) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            
            const adminRef = await firestore()
                .collection('admin') 
                .where('login', '==', login) 
                .where('senha', '==', senha) 
                .get();

       
            if (adminRef.empty) {
                Alert.alert("Erro", "Credenciais inválidas.");
            } else {
                //Alert.alert("Sucesso", "Login realizado com sucesso!");
                navigation.navigate("MenuAdmin");
            }
        } catch (error) {
            console.error("Erro ao buscar dados no Firestore: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar autenticar.");
        }
    };

    return (
        <View>
            <Text style={Estilos.letraG}>Login - Administrador</Text>
            <Text style={Estilos.letraG}></Text>

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

            <View style={{ flexDirection: "row" }}>
                <CheckBox
                    style={{ padding: 10, marginTop: 10 }}
                    onClick={() => {
                        setStateLembrar(!isCheckedLembrar);
                    }}
                    isChecked={isCheckedLembrar}
                />
                <Text style={Estilos.letraM}>Lembrar senha</Text>
            </View>

            <TextLink
                links={[{
                    text: "Esqueci a senha",
                    onPress: () => Alert.alert("Esqueceu a senha")
                }]}>
                Esqueci a senha
            </TextLink>

            <Text style={Estilos.letraG}></Text>

            <Botao nome="Entrar" onPress={realizarLogin} />
        </View>
    );
};
