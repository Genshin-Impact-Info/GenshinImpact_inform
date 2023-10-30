import React, { useState } from 'react';

export default function Posts({ posts }) {
    const [opendetail, setOpendetaill] = useState();
    const toggleSvgState = (index) => {
        if (index === opendetail) {
            setOpendetaill(0);
        }
        else {
            setOpendetaill(index);
        }
        console.log(posts);
    };
    return (
        <ul className='w-full flex flex-col items-center'>
            {
                posts.map(items => (
                    <>
                        <div className={opendetail === items.id ? "w-9/12 h-36 flex mt-10 justify-between items-center text-3xl shadow-[0px_-8px_10px_0px_rgba(0,0,0,0.3)] rounded-t-xl" : "w-9/12 h-36 flex mt-10 justify-between items-center text-3xl shadow-[0px_0px_30px_2px_rgba(0,0,0,0.2)] rounded-xl"} key={items.id}>
                            <img src={items.img} className={opendetail === items.id ? 'w-auto h-full rounded-tl-xl' : 'w-auto h-full rounded-l-xl'} />
                            <div>
                                <p className='w-80'>{items.name}</p>
                            </div>
                            {opendetail === items.id ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-12 h-12 cursor-pointer mr-12"
                                    onClick={() => toggleSvgState(items.id)}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12 cursor-pointer mr-12"
                                    onClick={() => toggleSvgState(items.id)}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            }
                        </div>
                        {opendetail === items.id ?
                            <div className='h-[60rem] w-9/12 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.3)] rounded-b-xl flex flex-col'>
                                <div className='flex h-2/6'>
                                    <div className='w-4/12 flex justify-center items-center'>
                                        <img src={items.img} className='rounded-full'>
                                        </img>
                                    </div>
                                    <div className='w-8/12 flex flex-col justify-center text-2xl pr-12'>
                                        <p>
                                            {'2세트 : ' + items.effect[0].firsteffect}
                                        </p>
                                        <p className='mt-4'>
                                            {'4세트 : ' + items.effect[0].secondeffect}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex h-2/6 w-full'>
                                    <div className='w-4/12 h-full flex justify-center items-center'>
                                        <img src='/images/domain.png' className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-8/12 flex flex-col justify-center text-2xl'>
                                        <p>
                                            {items.getplace}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex h-2/6 w-full items-center'>
                                    <div className='w-4/12 h-full text-2xl flex justify-center items-center'>
                                        <p>성유물 사용 캐릭터</p>
                                    </div>
                                    <div className='w-8/12 grid grid-cols-4 h-full justify-center items-center py-4 gap-x-10 pr-8'>
                                        {
                                            items.usecharacter.map((tem) => (
                                                <img key={tem.imgid} src={tem.img}></img>
                                            ))
                                        }  
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                            </>}
                    </>
                ))}
        </ul>
    )
}