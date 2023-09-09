import styles from '../styles/Header.module.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();
    function gomaining() {
        nav('/');
    }
    return (
        <div className={styles.coloring}>
        <div className={styles.header}>
            <img className={styles.logo} src='/images/logo.png' onClick={gomaining}></img>
            <ul className={styles.selectmenu}>
                <li className={styles.movemenu}><span>Character</span></li>
                <li className={styles.movemenu}><span>Weapons</span></li>
                <li className={styles.movemenu}><span>Artifacts</span></li>
                <li className={styles.movemenu}><span>Boss</span></li>
                <li className={styles.movemenu}><span>God</span></li>
                <li className={styles.movemenu}><span>Universe</span></li>
            </ul>
        </div>
        </div>
    );
}