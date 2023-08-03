import React, { ReactComponentElement } from 'react'

import styles from '../styles/Cartao.module.css';

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export const Cartao = ({bgcolor="#fff", children}: CartaoProps) => {
  return (
    <div className={styles.cartao}
        style={{backgroundColor: bgcolor}}
    >
        {children}
    </div>
  )
}
