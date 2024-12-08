
import React from 'react';
import { Text, Image } from 'react-native';
import Botao from "./botao";
import Estilos from "./estilos";

export default (props) => {
  return (
    <>
        <Text style={Estilos.letraM}>Emissão QRCode</Text>
        <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png' }}
            style={Estilos.qrcode}
        />
        <Botao nome="Cancelar" />
    </>
  );
}
