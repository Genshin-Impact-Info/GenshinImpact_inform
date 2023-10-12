import Headers from '@/app/Header';
import styles from '../../styles/components/Character.module.css';
import { useEffect, useState } from 'react';
import CharacterSwiper from './swiperpage/Characterswiper';

export default function Character() {
    const [loadpage, setLoadpage] = useState('Pyro');
    const [chardata, setChardata] = useState([]);
    const [judge, setJudge] = useState(0);
    function getcharacters(value) {
        setLoadpage(value);
        fetch('/datas/Genshin_Character_info.json')
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i <= 6; i++) {
                    if (data.elemental[i].name == value) {
                        setChardata(data.elemental[i].characters);
                        console.log(chardata)
                        break;
                    }
                }
            })
            .catch((error) => console.error('Error fetching JSON:', error));
    }
    useEffect(() => {
        if (judge <= 1) {
            getcharacters('Pyro');
            setJudge(judge => judge + 1)
        }
    }, [judge])
    return (
        <>
            <Headers />
            <div className={styles.charactermain}>
                <div className={styles.selectelement}>
                    <img src="/images/element/Element_Pyro.svg" className={loadpage == 'Pyro' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Pyro')}></img>
                    <img src="/images/element/Element_Hydro.svg" className={loadpage == 'Hydro' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Hydro')}></img>
                    <img src="/images/element/Element_Anemo.svg" className={loadpage == 'Anemo' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Anemo')}></img>
                    <img src="/images/element/Element_Electro.svg" className={loadpage == 'Electro' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Electro')}></img>
                    <img src="/images/element/Element_Cryo.svg" className={loadpage == 'Cryo' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Cryo')}></img>
                    <img src="/images/element/Element_Dendro.svg" className={loadpage == 'Dendro' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Dendro')}></img>
                    <img src="/images/element/Element_Geo.svg" className={loadpage == 'Geo' ? styles.selectedelements : styles.elements} onClick={() => getcharacters('Geo')}></img>
                </div>
                <>
                    <CharacterSwiper chdata={chardata} elemental={loadpage}/>
                </>
            </div>
        </>
    );
}
