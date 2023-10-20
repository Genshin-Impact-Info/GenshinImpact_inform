import Headers from '../../../app/Header';
import '../../../app/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'next/router';
export default function CharacterSwiper(props) {
    const router = useRouter();
    const [jsonData, setJsonData] = useState([]);
    const [open, setOpen] = useState(false);
    const [elemental, setElemental] = useState();
    useEffect(() => {
        setJsonData(props.chdata);
        setElemental(props.elemental);
        if (jsonData.length != 0) {
            setOpen(true);
        }
        console.log(open);
    }, [props.chdata, props.elemental]);
    function detailpage(value) {
        router.push({
            pathname: "/components/characterdetail/Detail",
            query: { id: value, element: elemental }
        });
        console.log(value, elemental);
    }
    return (
        <>
            {open ?
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.1}
                    loop={true}
                >
                    {
                        jsonData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex w-11/12 z-30 rounded-xl bg-cover shadow-[10_10px_30px_5px_rgba(204,204,204,0.7)]" style={{ backgroundImage: `url(${item.bg})` }}>
                                    <div className="flex w-full h-[75vh] p-12 pt-0">
                                        <img className="w-auto h-5/6 mt-12" src={item.img} />
                                        <div className="flex w-full flex-col text-start pl-12 pt-20 justify-between">
                                            <div>
                                                <p className="text-6xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)] mb-16">{item.name}</p>
                                                <p className="text-5xl text-white leading-snug drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">{item.text}</p>
                                            </div>
                                            <div className='w-full flex justify-end'>
                                                <img className="h-16 cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,1)]" src={'https://genshin-impact-info.github.io/GenshinImpact_inform/images/etc/morebutton.png'} onClick={() => detailpage(item.id)}></img>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                : null}
        </>
    );


}