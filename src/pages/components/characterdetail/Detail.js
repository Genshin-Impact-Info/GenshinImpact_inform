import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import axios from "axios";
import Headers from "@/app/Header";
import styles from '../../../styles/components/characterdetail/Detail.module.css';
export default function Detail(props) {
    const [elementals, setElementals] = useState();
    const [chid, setChid] = useState();
    const [characterdetail, setCharacterdetail] = useState([]);
    const router = useRouter();
    const { query } = router;
    useEffect(() => {
        setElementals(query.element)
        setChid(query.id)
        // axios.get('/datas/GenShin_Character_info.json')
            axios.get('https://genshin-impact-info.vercel.app/datas/GenShin_Character_info.json')
            .then((response) => {
                const data = response.data;
                for (let i = 0; i <= 6; i++) {
                    if (data.elemental[i].name == elementals) {
                        for (let j = 0; j <= data.elemental[i].characters.length; j++) {
                            if (data.elemental[i].characters[j].id == chid) {
                                setCharacterdetail(data.elemental[i].characters[j])
                                console.log(characterdetail);
                                break;
                            }
                        }
                    }
                }
            })
            .catch((error) => console.error('Error fetching JSON:', error));
    }, [characterdetail, chid, elementals])
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