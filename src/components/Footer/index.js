import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Todos os direitos reservados 2024.</p>
            <button className={styles.botaoInscrevase}>Inscreva-se</button>
        </footer>
    )
}

export default Footer