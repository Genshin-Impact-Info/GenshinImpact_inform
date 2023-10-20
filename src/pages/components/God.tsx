import React, { useState, useEffect } from 'react';
import Header from '../../app/Header';
import '../../app/globals.css';

interface GodType {
  id: number;
  name: string;
}

export const God: React.FC = () => {
  const [getid, setGetid] = useState(1);
  const Goddata: GodType[] = [
    {
      id: 1,
      name: '바람의 신'
    },
    {
      id: 2,
      name: '바위의 신'
    },
    {
      id: 3,
      name: '번개의 신'
    },
    {
      id: 4,
      name: '풀의 신'
    },
    {
      id: 5,
      name: '물의 신'
    },
    {
      id: 6,
      name: '불의 신'
    },
    {
      id: 7,
      name: '얼음의 신'
    },
  ]
  return(
    <>
      <Header/>
      <div className="w-full h-auto min-h-full p-8 pt-40 flex flex-col items-center">
        <p className="text-black text-3xl mb-12"></p>
        <div className="flex w-8/12 h-24 items-center text-black text-2xl">
          {
            Goddata.map((data) => (
              <button key={data.id} 
                className={getid == data.id ? 'cursor-pointer w-8/12 h-16 mr-8 bg-sky-500 flex justify-center items-center text-white rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]' : 'cursor-pointer w-8/12 h-16 mr-8 bg-white flex justify-center items-center rounded-full shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]'}
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

export default God;