import styles from '../styles/Header.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
export default function Headers() {
    const router = useRouter();
    return (
        <div className={styles.coloring}>
            <img className={styles.logo} src='images/logo.png' onClick={() => router.push("/")}></img>
            <ul className={styles.selectmenu}>
                <li className={styles.movemenu} onClick={() => router.push("/components/Character")}><span>Character</span></li>
                <li className={styles.movemenu}><span>Weapons</span></li>
                <li className={styles.movemenu} onClick={() => router.push("/components/Artifacts")}><span>Artifacts</span></li>
                <li className={styles.movemenu}><span>Boss</span></li>
                <li className={styles.movemenu}><span>God</span></li>
                <li className={styles.movemenu}><span>Universe</span></li>
            </ul>
        </div>
    );
}