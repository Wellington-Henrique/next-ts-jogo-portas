'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Porta from "../../../components/Porta";

import { atualizarPortas, criarPortas } from "../../../functions/portas";

import styles from '../../../styles/Jogo.module.css';

export default function Jogo() {
  const router = useRouter()

  const [portas, setPortas] = useState(criarPortas(3, 2));
  
  useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

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
        <Link href='/' />
      </div>
    </div>
  )
}