/* Exame Médico */

import React, { useState } from "react";
import { View, Text } from "react-native";
import Estilos from "./estilos";
import Botao from "./botao";
import Pesquisa from "./pesquisa";
import Entrada from "./entrada";
import CheckBox from "react-native-check-box"

export default (props) => {
    const [isCheckedAprovado, setStateAprovado] = useState(false);
    return (
        <View style={Estilos.container}>
            <Text style={Estilos.letraG}>Exame Médico</Text>
            <Text style={Estilos.letraM}></Text>
            <Pesquisa
                legenda="Sócio"
                nome="Pesquisa/Sócio"
                aviso="Pesquisa do sócio"
            />
            <Entrada
                legenda="Informações"
                aviso="Digite as informações do exame médico"
                altura={100}
                teclado="default"
            />
            <Entrada
                legenda="Data do Exame"
                aviso="Digite a data DD/MM/AAAA"
                teclado="numeric"
            />
            <View style={{ flexDirection: "row", alignContent: "space-around", alignItems: "flex-start" }}>
                <CheckBox
                    style={{ padding: 10, marginTop: 10 }}
                    onClick={()=>{
                        setStateAprovado(!isCheckedAprovado)
                    }}
                    isChecked={isCheckedAprovado}
                />
                <Text style={Estilos.letraM}>Aprovado</Text>
            </View>
            <Entrada
                legenda="Vencimento do Exame"
                aviso="Digite a data DD/MM/AAAA"
                teclado="numeric"
            />
            <Text style={Estilos.letraG}></Text>
            <Botao nome="Confirma" />
        </View>
    );
}
