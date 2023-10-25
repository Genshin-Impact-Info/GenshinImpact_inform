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
    };
    return (
        <ul className='w-full flex flex-col items-center'>
            {
                posts.map(items => (
                    <>
                        <div className="w-9/12 h-36 flex mt-10 justify-between items-center text-3xl drop-shadow-lg" key={items.id}>
                            <img src={items.img} className='w-auto h-full rounded-xl' />
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
                                    className="w-12 h-12 cursor-pointer"
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
                                    className="w-12 h-12 cursor-pointer"
                                    onClick={() => toggleSvgState(items.id)}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            }
                        </div>
                        {opendetail === items.id ?
                            <div className='h-96 w-9/12 drop-shadow-sm'>
                                <div>
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