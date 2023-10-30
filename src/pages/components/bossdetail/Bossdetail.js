import React from 'react';
import axios from 'axios';
import Header from '../../../app/Header';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../../../app/globals.css';
import Loadingpage from '../loading/Loadingpage';
export default function Bossdetail() {
    const router = useRouter();
    const [hostcount, setHostcount] = useState(0);
    const [loaded, setLoaded] = useState(true);
    const [bossdata, setBossdata] = useState([]);
    async function getbossdetaildata() {
        setLoaded(true);
        try {
            const { nob } = router.query;
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/boss_info/elite/view?nob=${nob}`);
            const Arraydata = response.data;
            setBossdata(Arraydata.data);
            console.log(bossdata);
            setHostcount(hostcount + 1);
            setLoaded(false);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }
    useEffect(() => {
        if (hostcount <= 1) {
            getbossdetaildata();
        }
    })
    return (
        <>
            <Header />
            {
                loaded ?
                    <Loadingpage />
                    :
                    <div className="w-full h-screen p-2 pt-20 items-center bg-zinc-800 grid grid-rows-3 grid-cols-2 gap-2">
                        <div className='w-full h-[80%] overflow-hidden bg-contain bg-center bg-no-repeat scale-90 row-span-3' style={{ backgroundImage: `url(${bossdata.img})` }}></div>
                        <div className='w-full h-full text-white text-6xl flex flex-col justify-center'>
                            <p>{bossdata.name} <span className='text-4xl ml-4'> {bossdata.info}</span></p>
                            <p className='text-3xl mt-8'>원소 : {bossdata.elemental}</p>
                        </div>
                        <div className='w-full h-full flex flex-col text-white'>
                            <p className='text-3xl'>드랍 아이템</p>
                            <div className='flex w-full h-2/3 items-center'>
                                {
                                    bossdata.items.map((data) => (
                                        <div key={data.id} className={data.id === '1' ? 'flex flex-col items-center justify-center' : 'flex flex-col items-center justify-center ml-12'}>
                                            <img src={data.img} className='w-32 h-32'></img>
                                            <p className='mt-4'>{data.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full h-full'>

                        </div>
                    </div>
            }
        </>
    )
}