import Headers from '../../../app/Header';
import '../../../app/globals.css';
import styles from '../../../styles/components/Character.module.css';
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
                                <h1 className={styles.shadowtext}>ss</h1>
                                <div className={styles.swipercontainer} style={{ backgroundImage: `url(${item.bg})` }}>
                                    <div className={styles.characterbox}>
                                        <div className={styles.characterimgbox}>
                                            <img className={styles.characterimg} src={item.img} />
                                        </div>
                                        <div className={styles.characterinfo}>
                                            <p className={styles.charactername}>{item.name}</p>
                                            <p className={styles.charactertext}>{item.text}</p>

                                        </div>
                                        <img className={styles.characterdetail} src={'https://genshin-impact-info.github.io/GenshinImpact_inform/images/etc/morebutton.png'} onClick={() => detailpage(item.id)}></img>
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