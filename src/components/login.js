/* Login - Administrador */

import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Estilos from "./estilos";
import Botao from './botao';
import Entrada from './entrada';
import CheckBox from "react-native-check-box"
import TextLink from "react-native-text-link";

export default () => {
    const [isCheckedLembrar, setStateLembrar] = useState(false);
    return (
        <View>
            <Text style={Estilos.letraG}>Login -Administrador</Text>
            <Text style={Estilos.letraG}></Text>
            <Entrada
                legenda="Login"
                aviso="Digite seu login"
                teclado="default"
            />
            <Entrada
                legenda="Senha"
                aviso="Digite sua senha"
                senha={true}
                teclado="default"
            />
            <View style={{ flexDirection: "row" }}>
                <CheckBox
                    style={{ padding: 10, marginTop: 10 }}
                    onClick={()=>{
                        setStateLembrar(!isCheckedLembrar)
                    }}
                    isChecked={isCheckedLembrar}
                />
                <Text style={Estilos.letraM}>Lembrar senha</Text>
            </View>
            <TextLink
                links={[{
                    text: "Esqueci a senha",
		            onPress: () => Alert.alert("Esqueceu a senha")
                }]}>Esqueci a senha</TextLink>
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Entrar" />
        </View>
    );
}
