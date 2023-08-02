'use client';

import { useState } from "react";
import Porta from "../components/Porta";

import { atualizarPortas, criarPortas } from "../functions/portas";

import styles from '../styles/Jogo.module.css';

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2));
  
  const renderizarPortas = () => {
    return portas.map(porta => 
      <Porta value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    )
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      
      <div className={styles.botoes}>

      </div>
    </div>
  )
}
