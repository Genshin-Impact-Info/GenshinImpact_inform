import Headers from '../../app/Header';
import { useEffect, useState } from 'react';
import CharacterSwiper from './swiperpage/Characterswiper';
import axios from 'axios';
import '../../app/globals.css';
import Loadingpage from './loading/Loadingpage';
export const Character: React.FC = () => {
    const [loadpage, setLoadpage] = useState('0');
    const [loading, setLoading] = useState(true);
    const [chardata, setChardata] = useState([]);
    const [judge, setJudge] = useState(0);
    async function getcharacters(value) {
        setLoadpage(value);
        try {
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/preview?ele=${value}`);
            const Arraydata = response.data;
            setChardata(Arraydata.data);
            console.log(chardata);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
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
            {loading ?
                <Loadingpage />
                : <div className="absolute w-full h-full flex items-center">
                    <div className="w-1/12 h-5/6 mr-48 flex justify-center flex-col">
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Pyro.svg" className={loadpage == '0' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('0')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Hydro.svg" className={loadpage == '1' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('1')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Anemo.svg" className={loadpage == '2' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('2')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Electro.svg" className={loadpage == '3' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('3')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Dendro.svg" className={loadpage == '4' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('4')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Cryo.svg" className={loadpage == '5' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('5')}></img>
                        <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/element/Element_Geo.svg" className={loadpage == '6' ? "items-center w-5/12 mt-8 ml-36 cursor-pointer bg-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center w-5/12 mt-8 ml-36 cursor-pointer"} onClick={() => getcharacters('6')}></img>
                    </div>
                    <>
                        <CharacterSwiper chdata={chardata} elemental={loadpage} />
                    </>
                </div>}
        </>
    );
}

export default Character;