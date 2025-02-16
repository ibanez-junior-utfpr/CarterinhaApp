import React, { useState } from "react";
import { View, Text, Alert, FlatList } from "react-native";
import Estilos from "./estilos";
import Botao from "./botao";
import Pesquisa from "./pesquisa";
import Entrada from "./entrada";
import CheckBox from "react-native-check-box";
import firestore from '@react-native-firebase/firestore';

export default (props) => {
    const [isCheckedAprovado, setStateAprovado] = useState(false);
    const [pesquisaTermo, setPesquisaTermo] = useState("");
    const [socios, setSocios] = useState([]);
    
    const pesquisarSocios = async (termo) => {
        if (termo) {
            try {
               
                const querySnapshot = await firestore()
                    .collection('socio')
                    .where('nome', '>=', termo)  
                    .where('nome', '<=', termo + '\uf8ff')  
                    .get();

                // Armazenando os resultados da consulta
                const sociosData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setSocios(sociosData);
            } catch (error) {
                console.error("Erro ao pesquisar sócios: ", error);
                Alert.alert("Erro", "Não foi possível realizar a pesquisa.");
            }
        } else {
            setSocios([]); 
        }
    };

    return (
        <View style={Estilos.container}>
            <Text style={Estilos.letraG}>Exame Médico</Text>
            <Text style={Estilos.letraM}></Text>

            <Pesquisa
                legenda="Sócio"
                nome="Pesquisa/Sócio"
                aviso="Pesquise por nome"
                valor={pesquisaTermo}
                setValor={setPesquisaTermo}
                onSearch={() => pesquisarSocios(pesquisaTermo)}
            />
            
        
            {socios.length > 0 && (
                <FlatList
                    data={socios}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.nome}</Text>
                        </View>
                    )}
                />
            )}

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
                    onClick={() => {
                        setStateAprovado(!isCheckedAprovado);
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
};