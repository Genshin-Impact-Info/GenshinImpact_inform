import Headers from '@/app/Header';
import styles from '../../styles/components/Character.module.css';
import { useEffect, useState } from 'react';
import CharacterSwiper from './swiperpage/Characterswiper';
import axios from 'axios';

export default function Character() {
    const [loadpage, setLoadpage] = useState('0');
    const [chardata, setChardata] = useState([]);
    const [judge, setJudge] = useState(0);
    function getcharacters(value) {
        setLoadpage(value);
        axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/preview?ele=${value}`)
            .then((response) => {
                const Arraydata = response.data;
                setChardata(Arraydata.data);
                console.log(chardata);
            })
            .catch((error) => console.error('Error fetching JSON:', error));
    }
    useEffect(() => {
        if (judge <= 1) {
            getcharacters('0');
            setJudge(judge => judge + 1)
        }
    }, [judge])
    return (
        <>
            <Headers />
            <div className={styles.charactermain}>
                <div className={styles.selectelement}>
                    <img src="images/element/Element_Pyro.svg" className={loadpage == '0' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('0')}></img>
                    <img src="images/element/Element_Hydro.svg" className={loadpage == '1' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('1')}></img>
                    <img src="images/element/Element_Anemo.svg" className={loadpage == '2' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('2')}></img>
                    <img src="images/element/Element_Electro.svg" className={loadpage == '3' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('3')}></img>
                    <img src="images/element/Element_Cryo.svg" className={loadpage == '4' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('4')}></img>
                    <img src="images/element/Element_Dendro.svg" className={loadpage == '5' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('5')}></img>
                    <img src="images/element/Element_Geo.svg" className={loadpage == '6' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('6')}></img>
                </div>
                <>
                    <CharacterSwiper chdata={chardata} elemental={loadpage} />
                </>
            </div>
        </>
    );
}