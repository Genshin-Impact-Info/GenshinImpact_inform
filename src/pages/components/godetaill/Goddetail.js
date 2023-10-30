import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Goddetail() {
    const router = useRouter();
    const [goddata, setGoddata] = useState([]);
    const [counts, setCounts] = useState(0);
    const [loaded, setLoaded] = useState(true);
    async function getgoddata() {
        setLoaded(true);
        try {
            const { nog } = router.query;
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/god_info/view?nog=${nog}`);
            const Arraydata = response.data;
            setGoddata(Arraydata.data);
            setCounts(counts + 1);
            setLoaded(false);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }
    useEffect(() => {
        if (hostcount <= 1) {
            getgoddata();
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
                        <div className='w-full h-full overflow-hidden bg-contain bg-center bg-no-repeat scale-50 row-span-3' style={{ backgroundImage: `url(${goddata.profile})` }}></div>
                        <div className='w-full h-full text-white text-6xl flex flex-col justify-center'>
                            <p>{goddata.name} <span className='text-4xl ml-4'> {goddata.subname}</span></p>
                            <p className='text-3xl mt-8'>원소 : {goddata.gnosis}</p>
                        </div>
                    </div>
            }
        </>
    )
}