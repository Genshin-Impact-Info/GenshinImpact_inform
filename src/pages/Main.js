import styles from '../styles/Main.module.css'
import '../app/globals.css';
import Headers from '@/app/Header';
export default function MainPage() {
    return (
        <>
            <Headers/>
            <div className={styles.mainpage}>
                <div className={styles.mainbg}>
                    <img src="images/main/maintext.png" className={styles.maintextbg}></img>
                </div>
            </div>
        </>
    )
}