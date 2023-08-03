import React from 'react'

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void

}

import styles from '../styles/EntradaNumerica.module.css';

export const EntradaNumerica = ({ text, value, onChange } : EntradaNumericaProps) => {
    const dec = () => onChange(value > 1 ? value - 1 : value);
    const inc = () => onChange(value + 1);

    return (
    <div className={styles.entradaNumerica}>
        <span className={styles.text}>{text}</span>
        <span className={styles.value}>{value}</span>
        <div className={styles.botoes}>
            <button className={styles.btn} onClick={dec}>-</button>
            <button className={styles.btn} onClick={inc}>+</button>
        </div>
    </div>
  )
}
