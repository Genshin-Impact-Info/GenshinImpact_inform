import React, { useState, useEffect } from 'react';
import Header from '../../app/Header';
import '../../app/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
export const Weapons: React.FC = () => {
  const [loadpage, setLoadpage] = useState(0);
  return (
    <>
      <Header />
      <div className="w-full min-h-full flex items-center">
        <div className="w-2/12 h-full flex justify-between flex-col items-center pt-40">
          <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/양손검.png" className={loadpage == 0 ? "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100"} onClick={() => setLoadpage(0)}></img>
          <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/한손검.png" className={loadpage == 1 ? "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center h-24 mt-8 cursor-pointer  bg-black rounded-full transition-all ease-in-out duration-300 scale-100"} onClick={() => setLoadpage(1)}></img>
          <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/법구.png" className={loadpage == 2 ? "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100"} onClick={() => setLoadpage(2)}></img>
          <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/활.png" className={loadpage == 3 ? "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100"} onClick={() => setLoadpage(3)}></img>
          <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/창.png" className={loadpage == 4 ? "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100"} onClick={() => setLoadpage(4)}></img>
        </div>
        <>
          <Swiper>

          </Swiper>
        </>
      </div>
    </>
  )
}

export default Weapons;