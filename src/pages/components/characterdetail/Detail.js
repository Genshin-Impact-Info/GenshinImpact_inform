import { useEffect, useState } from "react"
import axios from "axios";
import Headers from "../../../app/Header";
import styles from '../../../styles/components/characterdetail/Detail.module.css';
import modalstyles from '../../../styles/components/characterdetail/Break.module.css';
import '../../../app/globals.css';
import { useRouter } from 'next/router';
import Slider from '@mui/material/Slider';

export default function Detail() {
    const router = useRouter();
    const [characterdetail, setCharacterdetail] = useState([]);
    const [openbreakmodal, setOpenbreakmodal] = useState(false);
    const [openchaptermodal, setOpenchaptermodal] = useState(false);
    const [opencharacteristicmodal, setOpencharacteristicmodal] = useState(false);
    const [levels, setLevels] = useState(20);
    const [breakdata, setBreakdata] = useState([]);
    const [mora, setMora] = useState();
    const [fatedata, setFatedata] = useState([]);
    const [detailfatedata, setDetailfatedata] = useState([]);
    const [characteristicdata, setCharacteristicdata] = useState([]);
    const [detailcharacteristicdata, setDetailcharacteristicdata] = useState([]);
    //슬라이더 레벨 간격
    const marks = [
        {
            value: 20,
        },
        {
            value: 40,
        },
        {
            value: 50,
        },
        {
            value: 60,
        },
        {
            value: 70,
        },
        {
            value: 80,
        },
    ];
    //무한 불러오기 방지
    const [hostcount, setHostcount] = useState(0);
    function breakmodal() {
        setOpenbreakmodal(!openbreakmodal);
    }
    function chaptermodal() {
        setOpenchaptermodal(!openchaptermodal);
    }
    function characteristicmodal() {
        setOpencharacteristicmodal(!opencharacteristicmodal);
    }
    async function fetchData() {
        const { id, element } = router.query;
        try {
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/fate?ele=${element}&id=${id}`);
            const Fatedata = response.data;
            setFatedata(Fatedata.data);
            console.log(Fatedata.data[0].comment);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }
    async function fetchData2() {
        const { id, element } = router.query;
        try {
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/characteristic?ele=${element}&id=${id}`);
            const Chardata = response.data;
            setCharacteristicdata(Chardata.data);
            console.log(Chardata.data[0].comment);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }
    function detailfate(value) {
        setDetailfatedata(fatedata[value]);
        console.log(fatedata[value]);
    }
    function detailcharacteristic(value) {
        setDetailcharacteristicdata(characteristicdata[value]);
        console.log(characteristicdata[value]);
    }

    async function valuetext(value) {
        // 이전 값과 현재 값 비교
        if (value !== levels) {
            setLevels(value);
            const { id, element } = router.query;
            try {
                // setLevels이 완료될 때까지 대기
                await setLevels(value);
                const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/breakthrough?ele=${element}&id=${id}&level=${value}`);
                const Breakdata = response.data;
                setBreakdata(Breakdata.data.items);
                setMora(Breakdata.data);
                console.log(breakdata);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        }
        return `${value}`;
    }
    useEffect(() => {
        if (hostcount <= 1) {
            const { id, element } = router.query;
            console.log(id, element);
            //일반 캐릭터 데이터
            axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view?ele=${element}&id=${id}`)
                .then((response) => {
                    const Arraydata = response.data;
                    setCharacterdetail(Arraydata.data)
                    setHostcount(hostcount + 1);
                })
                .catch((error) => console.error('Error fetching JSON:', error));

            //캐릭터 돌파 재료 데이터
            axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/Character_info/view/breakthrough?ele=${element}&id=${id}&level=20`)
                .then((response) => {
                    const Breakdata = response.data;
                    setBreakdata(Breakdata.data.items);
                })
                .catch((error) => console.error('Error fetching JSON:', error));

            //캐릭터 운명의자리 데이터
            fetchData();

            //캐릭터 특성 데이터
            fetchData2();
        }
    }, [characterdetail])
    return (
        <>
            <Headers />
            <div className="w-full h-[100vh] flex items-center">
                <img src={characterdetail.detail} className="absolute w-full h-full bg-no-repeat z-[-1]"></img>
                <div className="flex w-auto min-w-[30%] h-full justify-center items-center">
                    <img src={characterdetail.img} className="w-auto h-[80%] pt-28"></img>
                    <p className="absolute text-[6vw] mt-[65vh] text-[#FF5C00] z-[1]">{characterdetail.name}</p>
                    <p className="absolute text-[6vw] mt-[66.5vh] ml-[0.75%] drop-shadow-[0_0px_25px_rgba(0,0,0,1)]">{characterdetail.name}</p>
                </div>
                <div className="flex w-[70%] h-full p-8 pt-20 flex-col items-end justify-center">
                    <div name="정보상자" className="flex w-[80%] h-[20%] pt-4 justify-end items-center">
                        <img src={'https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/break/break.png'} className="w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110" onClick={() => breakmodal()}></img>
                        <img src={characterdetail.chapter} className="w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110" onClick={() => chaptermodal()}></img>
                        <img src={characterdetail.talent} className="w-auto ml-12 h-[80%] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer transition-all ease-in-out duration-300 scale-100 hover:scale-110" onClick={() => characteristicmodal()}></img>
                    </div>
                    <div name="소속상자" className="flex justify-end items-center w-1/2 h-[10%]">
                        <p className="mr-4 text-[2.3vw] text-white drop-shadow-[0_0px_25px_rgba(0,0,0,1)]">소속</p>
                        <img src={characterdetail.affiliation} className="w-auto h-[70%] border-0 rounded-2xl bg-[#00bfa5] drop-shadow-[0_0px_10px_rgba(0,0,0,1)] cursor-pointer"></img>
                    </div>
                    <p name="캐릭터 한줄 대사" className="text-[3vw] -mt-2 mb-20 text-end text-white drop-shadow-[0_0px_25px_rgba(0,0,0,1)]">{characterdetail.text}</p>
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        className="w-1/2"
                        src={characterdetail.video}
                    />
                </div>
            </div>
            {
                openbreakmodal ?
                    <div className="absolute inset-0 flex z-50 bg-black bg-opacity-70 backdrop-blur-sm w-full h-full">
                        <div className="w-full h-32 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer">
                            <h2 className="font-thin pl-8 pt-0">돌파재료</h2>
                            <p onClick={breakmodal}>X</p>
                        </div>
                        <div className="absolute w-4/6 h-1/2 mt-80 mx-auto flex flex-col items-center   left-1/2 -translate-x-1/2">
                            <h2 className=" text-5xl text-white">Level {levels}</h2>
                            <Slider
                                className="mt-4"
                                aria-label="Restricted values"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={null}
                                marks={marks}
                                min={20}
                                max={80}
                                valueLabelDisplay="on"
                                sx={{
                                    color: "white",
                                    height: "10px",
                                    width: "920px",
                                }}
                            />
                            <div className="w-full h-full mt-4 flex justify-center items-end">
                                {
                                    breakdata.map((item, index) => (
                                        <div className="h-full flex flex-col justify-center items-center mr-20 text-white text-lg" key={index}>
                                            <img src={`${item.img}`} className="w-24 pb-10"></img>
                                            <p>{item.name + ' ' + item.count + '개'}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }
            {
                openchaptermodal ?
                    <>
                        <div className="absolute inset-0 flex-col z-50 bg-black bg-opacity-70 px-8 backdrop-blur-sm w-full h-full`">
                            <div className="w-full h-1/6 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer">
                                <h2 className="font-thin pl-8 pt-0">운명의자리</h2>
                                <p onClick={chaptermodal}>X</p>
                            </div>
                            <div className="w-full h-5/6 flex items-center">
                                <div className="h-5/6 w-2/12 flex flex-col justify-between items-center">
                                    {
                                        fatedata.map((item, index) => (
                                            // 이곳에서 각 항목(item)을 처리합니다.
                                            <div key={index} class="mx-auto flex h-20 w-20 items-center justify-center">
                                                <div class="h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                                                    <div class="flex h-full w-full rounded-full items-center justify-center bg-gray-800 back">
                                                        <img className="cursor-pointer" src={item.img} onClick={() => detailfate(index)} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="h-full w-10/12 flex flex-row items-center justify-between text-white pr-36">
                                    <div className="flex flex-col justify-center items-center h-full w-2/6 mr-8">
                                        <img className="w-[150px]" src={detailfatedata.img}></img>
                                    </div>
                                    <div className="flex flex-col h-full w-4/6 justify-center">
                                        <p className="text-5xl mb-8">{detailfatedata.name}</p>
                                        <p className="text-4xl">{detailfatedata.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                opencharacteristicmodal ?
                <>
                <div className="absolute inset-0 flex-col z-50 bg-black bg-opacity-70 px-8 backdrop-blur-sm w-full h-full`">
                            <div className="w-full h-1/6 flex justify-between items-center pr-12 text-5xl text-white cursor-pointer">
                                <h2 className="font-thin pl-8 pt-0">특성</h2>
                                <p onClick={characteristicmodal}>X</p>
                            </div>
                            <div className="w-full h-5/6 flex items-center">
                                <div className="h-5/6 w-2/12 flex flex-col justify-between items-center">
                                    {
                                        characteristicdata.map((item, index) => (
                                            // 이곳에서 각 항목(item)을 처리합니다.
                                            <div key={index} class="mx-auto flex h-20 w-20 items-center justify-center">
                                                <div class="h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                                                    <div class="flex h-full w-full rounded-full items-center justify-center bg-gray-800 back">
                                                        <img className="cursor-pointer" src={item.img} onClick={() => detailcharacteristic(index)} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="h-full w-10/12 flex flex-row items-center justify-between text-white pr-36">
                                    <div className="flex flex-col justify-center items-center h-full w-2/6 mr-8">
                                        <img className="w-[150px]" src={detailcharacteristicdata.img}></img>
                                    </div>
                                    <div className="flex flex-col h-full w-4/6 justify-center">
                                        <p className="text-5xl mb-8">{detailcharacteristicdata.name}</p>
                                        <p className="text-4xl">{detailcharacteristicdata.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
                : null
            }
        </>
    )
}