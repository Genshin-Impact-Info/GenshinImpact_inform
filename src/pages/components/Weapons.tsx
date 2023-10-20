import React, {useState, useEffect} from 'react';
import Header from '../../app/Header';
import '../../app/globals.css';
interface WeaponType {
  id: number;
  name: string;
}

export const Weapons: React.FC = () => {
  const [getid, setGetid] = useState(1);
  const Weapondata: WeaponType[] = [
    {
      id: 1,
      name: '양손검(대검)'
    },
    {
      id: 2,
      name: '한손검'
    },
    {
      id: 3,
      name: '법구'
    },
    {
      id: 4,
      name: '활'
    },
    {
      id: 5,
      name: '장병기(창)'
    },
  ]
  return (
    <>
      <Header />
      <div className="w-full h-auto min-h-full p-8 pt-40 flex flex-col items-center">
        <p className="text-black text-3xl mb-12"></p>
        <div className="flex w-7/12 h-24 items-center text-black text-2xl">
          {
            Weapondata.map((data) => (
              <button key={data.id} className={getid == data.id ? 'cursor-pointer w-5/12 h-16 mr-8 bg-sky-500 text-white flex justify-center items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]' : 'cursor-pointer w-5/12 h-16 mr-8 bg-white flex justify-center items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]'}
                 onClick={() => {
                  setGetid(() => {
                    return data.id;
                  })
                 }}><p>{data.name}</p>
              </button>
            ))
          }
        </div>
        <div className="w-full h-auto flex flex-col">
        </div>
      </div>
    </>
  )
}

export default Weapons;