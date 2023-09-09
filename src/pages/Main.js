import styles from '@/styles/Main.module.css'
import '../app/globals.css';
export default function Main() {
    return (
        <div className={styles.mainpage}>
            <img src="/images/main/background.webp" className={styles.mainbg}></img>
        </div>
    )
}