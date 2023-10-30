import React, { useState, useEffect } from "react";
import Headers from '../../app/Header';
import axios from "axios";
import '../../app/globals.css';
import Loadingpage from "./loading/Loadingpage";
import { useRouter } from "next/router";
export const Boss: React.FC = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(true);
  const [goddata, setGoddata] = useState<any[]>([]);
  const [counts, setCounts] = useState(0);
  async function getgoddata() {
    setLoaded(true);
    try {
      const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/god_info/preview`);
      const Arraydata = response.data;
      setGoddata(Arraydata.data);
      console.log(Arraydata.data);
      setCounts(counts + 1);
      setLoaded(false);
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }
  function godetail(value) {
    router.push({
      pathname: "/components/godetail/Goddetail",
      query: { nog: value }
  });
  }
  useEffect(() => {
    if (counts <= 1) {
      getgoddata();
    }
  })
  return (
    <>
      <Headers />
      {
        loaded ? <Loadingpage /> :

          <div className="w-full h-screen p-2 pt-40 flex flex-col items-center bg-zinc-800">
            <p className="text-white text-5xl">일곱 명의 집정관 (신) : 현재는 5명 공개</p>
            <div className="w-full h-auto  grid grid-cols-5 grid-rows-1 gap-2 place-content-center mt-40">
              {
                goddata.map((item, index) => (
                  <div key={index} className="flex flex-col justify-end h-[550px]  transform transition-all ease-in-out duration-300 hover:bg-black hover:bg-opacity-50  cursor-pointer overflow-hidden" onClick={() => godetail(item.subname)}>
                    <div className=" w-full h-[80%] overflow-hidden bg-cover bg-start bg-no-repeat hover:scale-110 transform transition-all ease-in-out duration-300" style={{ backgroundImage: `url(${item.profile})` }}>
                    </div>
                    <div className="h-[20%] bg-slate-950 text-white flex flex-col justify-center items-center px-4 z-10">
                      <p className="text-base font-light">{item.subname}</p>
                      <p className="text-2xl">{item.name}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      }
    </>
  );
}

export default Boss;