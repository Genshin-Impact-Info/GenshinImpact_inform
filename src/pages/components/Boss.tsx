import React, { useState, useEffect } from "react";
import Headers from '../../app/Header';
import axios from "axios";
import '../../app/globals.css';
export const Boss: React.FC = () => {
  const [boss, setBoss] = useState(true);
  function changecategory() {
    setBoss(!boss)
  }
  useEffect(() => {
    axios.get('https://glitch.com/edit/#!/pinnate-leeward-legume?path=GenShin_Boss_info_final.json%3A4%3A0')
    .then((response) => {
      const Arraydata = response.data;
      console.log(Arraydata)
  })
  .catch((error) => console.error('Error fetching JSON:', error));
  })
    return(
      <>
        <Headers/>
        <div className="w-full h-auto min-h-full p-8 pt-40 flex flex-col items-center">
            <p className="text-black text-3xl mb-12">{boss ? "영역 토벌" : "적 우두머리"}</p>
            <div className="flex w-4/12 h-24 justify-between items-center text-black text-2xl">
              <button className={boss ? "w-5/12 h-16 bg-sky-500 flex justify-center text-white items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "w-5/12 h-16 bg-white flex justify-center items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]"} onClick={() => changecategory()}><p>주간</p></button>
              <button className={boss ? "w-5/12 h-16 bg-white flex justify-center items-center  rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]" : "w-5/12 h-16 bg-sky-500 flex justify-center text-white items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]"}  onClick={() => changecategory()}><p>일반</p></button>
            </div>
            {
              boss ?
              <div className="w-full h-auto flex flex-col">
              </div>
              : <div className="w-full h-auto flex flex-col">
              </div>
            }
        </div>
      </>  
    );
}

export default Boss;