import { useEffect, useState } from "react"
import axios from "axios";
import Headers from "@/app/Header";
import styles from '../../../styles/components/characterdetail/Detail.module.css';
import '@/app/globals.css';

export default function Detail(props) {
    const [characterdetail, setCharacterdetail] = useState([]);
    useEffect(() => {
        axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view?ele=${props.element}&id=${props.id}`)
            .then((response) => {
                const Arraydata = response.data;
                setCharacterdetail(Arraydata)
                console.log(characterdetail);
            })
            .catch((error) => console.error('Error fetching JSON:', error));
    }, [characterdetail])
    return (
        <>
            <Headers />
            <div className={styles.detailmain}>
                <img src={characterdetail.detail} className={styles.detailbg}></img>
                <div className={styles.characterbox}>
                    <img src={characterdetail.img} className={styles.detailimg}></img>
                    <p className={styles.detailname1}>{characterdetail.name}</p>
                    <p className={styles.detailnamebg}>{characterdetail.name}</p>
                </div>
                <div className={styles.infobox}>
                    <div name="정보상자" className={styles.moreinfo}>
                        <img src={'/images/menu/break/break.png'} className={styles.breakimg}></img>
                        <img src={characterdetail.chapter} className={styles.breakimg}></img>
                        <img src={characterdetail.talent} className={styles.breakimg}></img>
                    </div>
                    <div name="소속상자" className={styles.affiliationbox}>
                        <p className={styles.simpletext}>소속</p>
                        <img src={characterdetail.affiliation} className={styles.affiliationimg}></img>
                    </div>
                    <p name="캐릭터 한줄 대사" className={styles.characterline}>{characterdetail.text}</p>
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        className={styles.charactervideo}
                        src={characterdetail.video}
                    />
                </div>
            </div>
        </>
    )
}