import React from 'react';
import { Text, Image } from 'react-native';
import Botao from "./botao";
import Estilos from "./estilos";
import LottieView from 'lottie-react-native';

export default (props) => {
    return (
        <>
            <Text style={Estilos.letraG}>Leitura QRCode</Text>
            <LottieView
                source={require("../images/Animation.json")}
                autoPlay
                loop
                style={Estilos.qrcode}
            />
            <Botao nome="Cancelar" />
        </>
    )
}