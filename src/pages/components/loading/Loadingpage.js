import React from 'react';
import { RingLoader } from 'react-spinners';
import '../../../app/globals.css'
export default function Loadingpage() {
    return (
        <div className='w-full h-screen flex flex-col text-4xl items-center justify-center z-[99999999]'>
            <h1 className='mb-16'>Load Data...</h1>
            <RingLoader />
        </div>
    )
}