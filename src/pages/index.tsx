import Link from "next/link";
import { Cartao } from "../components/Cartao";

import styles from '../styles/Formulario.module.css';
import { useState } from "react";
import { EntradaNumerica } from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [portaComPresente, setPortaComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c"><h1>Monty Hall</h1></Cartao>
        <Cartao>
          <EntradaNumerica 
            text="Qtde portas" 
            value={qtdePortas} 
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica 
            text="Porta com presente" 
            value={portaComPresente} 
            onChange={comPresente => setPortaComPresente(comPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${portaComPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}