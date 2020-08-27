import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import ComFilhos from "./components/ComFilhos";
import ComParametro from "./components/ComParametro";
import Primeiro from "./components/Primeiro";

export default (props) => (
  <div className="App">
    
    <Card titulo="#03 - Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Laura</li>
          <li>José</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente Com Parâmetro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

  </div>
);
