import React, { useState, useEffect } from "react";
import Headers from '../../app/Header';
import axios from "axios";
import '../../app/globals.css';
import Loadingpage from "./loading/Loadingpage";
import { useRouter } from 'next/router';
export const Boss: React.FC = () => {
  const router = useRouter();
  const [boss, setBoss] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const [bossdata, setBossdata] = useState<any[]>([]);
  const [judge, setJudge] = useState(0);
  const [bossnumber, setBossnumber] = useState(0);
  function gobossdetail(value) {
    router.push({
      pathname: "/components/bossdetail/Bossdetail",
      query: { nob: value }
    });
  }
  function gonormaldetail(value) {
    router.push({
      pathname: "/components/bossdetail/Normalboss",
      query: { nob: value, country: bossnumber }
    });
  }
  function changetoweek() {
    setBoss(true);
    getdata();
  }
  function changetodaily() {
    setBoss(false);
    getdaily(0);
  }
  async function getdata() {
    setLoaded(true);
    try {
      const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/boss_info/elite/preview`);
      const Arraydata = response.data;
      setBossdata(Arraydata.data);
      console.log(Arraydata.data)
      console.log(bossdata);
      setLoaded(false);
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }
  function changeregion(value) {
    getdaily(value);
  }
  async function getdaily(value) {
    setLoaded(true);
    try {
      const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/boss_info/preview?country=${value}`);
      const Arraydata = response.data;
      setBossdata(Arraydata.data);
      console.log(Arraydata.data)
      console.log(bossdata);
      setBossnumber(value);
      setLoaded(false);
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }
  useEffect(() => {
    console.log(bossdata)
    if (judge <= 1) {
      getdata();
    }
  }, [judge])
  return (
    <>
      <Headers />
      {loaded ?
        <Loadingpage /> :
        <div className="w-full h-auto p-2 pt-40 flex flex-col items-center bg-zinc-800">
          <p className="text-white text-3xl mb-16">{boss ? "영역 토벌" : "적 우두머리"}</p>
          <div className="flex w-4/12 h-24 justify-between items-center  text-white text-2xl">
            <button className="w-2/6 text-2xl cursor-pointer items-center transition duration-300 group teext-center" onClick={() => changetoweek()}><p>주간<span className={boss ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
            <button className="w-2/6 text-2xl cursor-pointer items-center transition duration-300 group" onClick={() => changetodaily()}><p>일반<span className={boss ? "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
          </div>
          {
            boss ?
              <div className="w-full min-h-full grid grid-cols-5 grid-rows-2 gap-2 mt-20">
                {
                  bossdata.map((data, index) => (
                    <div className="flex flex-col justify-end h-[550px]  transform transition-all ease-in-out duration-300 hover:bg-black hover:bg-opacity-50  cursor-pointer overflow-hidden" key={index} onClick={() => gobossdetail(data.name)}>
                      <div style={{ backgroundImage: `url(${data.img})` }} className=" w-full h-[80%] overflow-hidden bg-cover bg-center bg-no-repeat scale-[0.9] hover:scale-[0.95] transform transition-all ease-in-out duration-300">
                      </div>
                      <div className="h-[20%] bg-slate-950 text-white flex flex-col justify-center items-center px-4 z-10">
                        <p className="text-xl">{data.name}</p>
                        <p className="mt-2">{data.info}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              :
              <>
                <div className="flex w-6/12 h-24 justify-between items-center  text-white text-2xl">
                  <button className="w-1/6 text-2xl cursor-pointer items-center transition duration-300 group text-center" onClick={() => changeregion(0)}><p>몬드<span className={bossnumber === 0 ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
                  <button className="w-1/6 text-2xl cursor-pointer items-center transition duration-300 group text-center" onClick={() => changeregion(1)}><p>리월<span className={bossnumber === 1 ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
                  <button className="w-1/6 text-2xl cursor-pointer items-center transition duration-300 group text-center" onClick={() => changeregion(2)}><p>이나즈마<span className={bossnumber === 2 ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
                  <button className="w-1/6 text-2xl cursor-pointer items-center transition duration-300 group text-center" onClick={() => changeregion(3)}><p>수메르<span className={bossnumber === 3 ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
                  <button className="w-1/6 text-2xl cursor-pointer items-center transition duration-300 group text-center" onClick={() => changeregion(4)}><p>폰타인<span className={bossnumber === 4 ? "block max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 mt-3 bg-neutral-300"}></span></p></button>
                </div>
                <div className="w-full min-h-full grid grid-cols-5 grid-rows-2 gap-2 mt-20">
                  {
                    bossdata.map((data, index) => (
                      <div className="flex flex-col justify-end h-[550px] w-full transform transition-all ease-in-out duration-300 hover:bg-black hover:bg-opacity-50  cursor-pointer overflow-hidden" key={index} onClick={() => gonormaldetail(data.name)}>
                        {
                          Array.isArray(data.img) ?
                            <div style={{ backgroundImage: `url(${data.img[1].img})` }} className=" w-full h-[80%] overflow-hidden bg-contain  bg-no-repeat scale-[0.9] hover:scale-[0.95] transform transition-all ease-in-out duration-300">
                            </div>
                            : <div style={{ backgroundImage: `url(${data.img})` }} className=" w-full h-[80%] overflow-hidden bg-contain bg-center bg-no-repeat scale-[0.9] hover:scale-[0.95] transform transition-all ease-in-out duration-300">
                            </div>
                        }
                        <div className="h-[20%] bg-slate-950 text-white flex flex-col justify-center items-center px-4 z-10">
                          <p className="text-xl">{data.name}</p>
                          <p className="mt-2">{data.info}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
          }
        </div>
      }
    </>
  );
}

export default Boss;