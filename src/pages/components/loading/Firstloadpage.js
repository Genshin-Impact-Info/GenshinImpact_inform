import React from 'react';
import { ClipLoader	 } from 'react-spinners';
import '../../../app/globals.css'
export default function Firstloadpage() {
    return (
        <div className='w-screen h-screen relative flex flex-col text-4xl items-center justify-center z-[99999999]'>
            <h1 className='mb-16'>Please wait....</h1>
            <ClipLoader	 />
        </div>
    )
}