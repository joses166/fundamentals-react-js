import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import ComFilhos from "./components/basicos/ComFilhos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megasena/MegaSena";

export default (props) => (
  <div className="App">

    <h1>Fundamentos do React</h1>

    <div className="Cards">
      <Card titulo="#11 - Mega Sena" color={"#ADFF2F"}>
        <MegaSena qtdeNumeros={8} />
      </Card>

      <Card titulo="#10 - Contador" color={"#6C8672"}>
        <Contador passo={10} valor={100} />
      </Card>

      <Card titulo="#09 - Input" color={"#EB65A0"}>
        <Input />
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color={"#1352A2"}>
        <Super />
      </Card>

      <Card titulo="#07 - Comunicação Direta" color={"#C05949"}>
        <Pai sobrenome="Jeffé" />
      </Card>

      <Card titulo="#06 - Condicional v2" color={"#83BF17"}>
        <CondicionalComIf numero={8} />
      </Card>

      <Card titulo="#05 - Condicional v1" color={"#F15D58"}>
        <Condicional numero={10} />
        <br />
        <Condicional numero={5} />
      </Card>

      <Card titulo="#04 - Repetição" color={"#363635"}>
        <Repeticao />
      </Card>

      <Card titulo="#03 - Componente Com Filhos" color={"#A68F58"}>
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Laura</li>
            <li>José</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente Com Parâmetro" color={"#DCDDCD"}>
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color={"#02D0AC"}>
        <Primeiro />
      </Card>
    </div>

  </div>
);
