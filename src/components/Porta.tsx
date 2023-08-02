import PortaModel from '../model/porta';
import styles from '../styles/Porta.module.css';

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta({ value, onChange } : PortaProps) {
    const porta = value;
    const selecionada = porta.selecionada ? styles.selecionada : '';

    const alternarSelecao = (e) => {
        onChange(porta.alternarSelecao());
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>
                        {porta.numero}
                    </div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}