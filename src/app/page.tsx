'use client';

import { useState } from "react";
import Porta from "../components/Porta";

import { atualizarPortas, criarPortas } from "../functions/portas";

import Jogo from "./jogo";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));
  
  const renderizarPortas = () => {
    return portas.map(porta => 
      <Porta value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    )
  }

  return (
    <div>
      <h1>Início</h1>
    </div>
  )
}
