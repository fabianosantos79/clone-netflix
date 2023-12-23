import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <img src='https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_logo.png' alt='Logo Fakeflix' />
                <ul className={styles.listaNav}>
                    <li className={styles.listaNavItem}>Home</li>
                    <li className={styles.listaNavItem}>Filmes</li>
                    <li className={styles.listaNavItem}>Séries</li>
                </ul>
                <button>Inscreva-se</button>
            </nav>
            <div className={styles.boxBanner}>
                Banner
            </div>
        </header>
    )
}

export default Header;